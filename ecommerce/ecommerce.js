//Data ( Products.)
let Productos =  [
    {"id": 1, "nombre": "Expresso Cream","precio": 267,"ingredientes": "Vodka, Licor de café cremoso, Café","imagen": "	https://lerdafelipe.github.io/magmacocteles/imagenes/Expresso_Cream.jpg"}, 
    {"id": 2,"nombre": "Golden Hanky Panky","precio": 290,"ingredientes": "Gin, Fernet, Vermouth rosso, Syrup de pomelo amarillo","imagen": "	https://lerdafelipe.github.io/magmacocteles/imagenes/Golden_Hanky_Panky.jpg"}, 
    {"id": 3,"nombre": "Hanky Panky","precio": 207,"ingredientes": "Gin, Fernet, Vermouth rosso","imagen": "	https://lerdafelipe.github.io/magmacocteles/imagenes/Hanky_Panky.jpg"}, 
    {"id": 4,"nombre": "Magma","precio": 353,"ingredientes": "Ron dorado, Bitter rojo, Vermouth rosso, Syrup de ciruela, Exprimido de pomelo rojo, Canela","imagen": "	https://lerdafelipe.github.io/magmacocteles/imagenes/Magma.jpg"}, 
    {"id": 5,"nombre": "Mint Collins","precio": 285,"ingredientes": "Gin, Exprimido de limon, Almibar de menta","imagen": "	https://lerdafelipe.github.io/magmacocteles/imagenes/Mint_Collins.jpg"}, 
    {"id": 6,"nombre": "Negroni","precio": 255,"ingredientes": "Gin, Bitter rojo, Vermouth rosso","imagen": "	https://lerdafelipe.github.io/magmacocteles/imagenes/Negroni.jpg"}, 
    {"id": 7,"nombre": "Penicillin","precio": 305,"ingredientes": "Whisky, Exprimido de limon, Jarabe de miel y jengibre","imagen": "	https://lerdafelipe.github.io/magmacocteles/imagenes/Penicillin.jpg"}, 
    {"id": 8,"nombre": "Penicillin","precio": 185,"ingredientes": "Bitter rojo, Exprimido de Naranja, Vermouth rosso, Almibar regular","imagen": "	https://lerdafelipe.github.io/magmacocteles/imagenes/Presto.jpg"}
];

//Array of product in the cart
let ProductsCart = [];

//Function to deploy de products
const deployProducts = async(data)=>{
    let fragment = ''
    //For each element in the data of product, i create a html fragment and insert it in the document
    for await(let producto of data) {
            fragment += `<div  class="t-33">
                        <div class="cocteles_div">
                            <img alt="coctel" src="${producto.imagen}">
                            <div>
                                <h3>${producto.nombre}</h3>
                                <p>$ ${producto.precio}</p>
                                <button onclick="viewDetails(${producto.id})" type="button" class="btn-ver ing">Ver más</button>
                            </div>
                        </div>
                    </div>`; 
    }
    document.getElementById('cocteles').innerHTML = fragment;
}

//Function to deploy the popup of the details
const viewDetails = (id)=>{
    //When the user Click the view of the product, I create a html fragment to show him a popup of the product
    let product = Productos.filter(element => element.id == id);
    let popup = `<div class="popup">
                    <div class="popup-img">
                        <img src="${product[0].imagen}" alt="">
                    </div>
                    <div class="popup-content">
                        <div class="popup-titulo"><h2>${product[0].nombre}</h2></div>
                        <div class="popup-ingredientes">
                            <h4>ingredientes</h4>
                            <ul>
                                <li>${product[0].ingredientes}</li>
                            </ul>
                        </div>
                        <div class="popup-btns">
                            <button type="button" onclick="cerrarPopup()" class=" btn btn-cerrarPopup">Cerrar</button>
                            <button onclick="addCart(${product[0].id})" id="${product[0].id}" type="button" class="btn btn-addCart">Agregar al carrito</button>
                            </div>
                    </div>           
                </div>`
    document.getElementById('popup-container').innerHTML = popup;
    //And I add the class Open to show the popup
    document.getElementById('popup-container').classList.add('open');
};

//Function to deploy the total in the cart view
const deployTotal = ()=>{
    //I calculate the total of the order with the method reduce and return a html fragmento tlater, insert it in the cart popup
    let total = ProductsCart.reduce((totalPrice, item)=>{
        return (item.cantidad * item.precio) + totalPrice
    }, 0);
        return`<tr>
                <td></td>
                <td><b>Total=</b></td>
                <td><b>$ ${total}</b></td>
                <td></td>
            </tr>`
}

//Function to deploy the cart
const deployCart = (datos)=>{
    //For each element in the Array of the cart, i create a html fragment to later, insert this fragment more the previus fragment in the document
    let htmlCart = '';
    for (let element of datos) {
        htmlCart += `<tr>
                        <td><b>${element.nombre}</b></td>
                        <td>${element.cantidad}</td>
                        <td>$ ${element.cantidad * element.precio}</td>
                        <td><button onclick=deleteProduct(${element.id}) type="button" class="btn btn-danger btn-borrar-producto" onclick=elimnarProducto(${element.id})>X</button></td>
                    </tr>`
    }
    if(ProductsCart.length > 0){
        document.getElementById('productos-pv-cart').innerHTML = htmlCart + deployTotal(); 
    } else document.getElementById('productos-pv-cart').innerHTML = '';
}

//Close the popup of one product
const cerrarPopup = ()=>{
    document.getElementById('popup-container').classList.remove('open');
}

//Open the popup of the cart
const openCart = ()=>{
    document.getElementById('popup-container-pv').classList.add('open');
}

//Close the popup of the cart
const closeCart = ()=>{
    document.getElementById('popup-container-pv').classList.remove('open');
}

//Add one product to the cart
const addCart = (id)=>{
    //I get the product than have the id of the parameter and if that product exist, i add a quantity else, i push the produt to the array
    let productAdd = Productos.filter(element => element.id == id);
    let exist = ProductsCart.findIndex((element => element.id == id));
    if(exist === -1){ProductsCart.push({cantidad:1, ...productAdd[0]});}
    else{ProductsCart[exist].cantidad = ProductsCart[exist].cantidad +1;}
    //I save the product in the memory to use in future visits
    localStorage.setItem('compraGuardada', JSON.stringify(ProductsCart));
    deployCart(ProductsCart);
    document.getElementById('popup-container').classList.remove('open');
}

//Delete one product of the cart
const deleteProduct = (id)=>{
    ProductsCart = ProductsCart.filter(elem =>elem.id !== id);
    localStorage.setItem('compraGuardada', JSON.stringify(ProductsCart));
    deployCart(ProductsCart);
}

// Function to Initialize the app
const Initialize = async()=>{
    const CompraGuardada = await JSON.parse(localStorage.getItem('compraGuardada'));
    if(CompraGuardada !== null){
        for (let e  of CompraGuardada) {
            ProductsCart.push(e)
        }
    } 
    deployCart(ProductsCart);
    deployProducts(Productos);
}

// Function to end the purchase
const endPurchase =()=>{
    let msg = 'Mi%20compra%20es:%0A';
    let total = ProductsCart.reduce((totalPrice, item)=>{
        return (item.cantidad * item.precio) + totalPrice
    }, 0);
    for (let e of ProductsCart) {
        msg += `${e.nombre}%20x${e.cantidad}%20%20*=$${e.cantidad * e.precio}*%0A`
    }
    msg = msg += `*Total=%20$${total}*`;
    localStorage.removeItem('compraGuardada');
    location.href = `https://wa.me/+5493534279005?text=${msg}`;
}

//Start The app
Initialize();


/***************
 * *************
 * *************
 * *************
 */