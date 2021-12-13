let crypto = [];

//If the percentage is grater than 0, the color of the percentage in the table will be green, else it will be red
const styleConditional = (element)=>{
    if(element.price_change_percentage_24h>0){
        return 'green';
    }else return 'red';
};

//Funtion to deploy info
const deployCurrencys = async (data)=>{
    let fragment = '';
    //Number of the currency in the list.
    let number = 0;
    //If the data contains elements, deploy the table. Else, deploy a msg
    if(data.length > 0){
        for await(let element of data) {
            number = number +1;
            fragment += `<tr>
                        <td  class="text-center">${number}</td>
                        <td>
                            <img class="img-table" src=${element.image} alt='${element.name}'/>
                            ${element.name} 
                            <span class="symbol">
                                ${(element.symbol).toUpperCase()}
                            </span>
                        </td>
                        <td>U$D ${parseFloat(element.current_price).toFixed(2)}</td>
                        <td class="text-center" style="color:${styleConditional(element)};font-weight:500;">${parseFloat(element.price_change_percentage_24h).toFixed(2)}%</td>
                        <td  class="text-center">${element.total_volume}</td>
                    </tr>`
        }
        //Inner the info in the table
        document.getElementById('cryptoDiv').innerHTML=fragment;
    }else {
        // Inner the msg in the table
        document.getElementById('cryptoDiv').innerHTML= `<h6 style="text-align:center;width:100%;">Sorry! We cannot find any currency</h6>`;
    }
};


//Fetch api and deploy the info.
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false')
.then(data=>data.json()).then(datos=>{
    //Push the data in the variable
    for (let e of datos) {
        crypto.push(e);
    }
    //Deploy the info
    deployCurrencys(crypto);
});


//Search function
const search = document.getElementById('search');

search.addEventListener('input', (e)=>{
    let newData = crypto.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()) || el.symbol.toLowerCase().includes(e.target.value.toLowerCase()));
    //If the input dont contains anything, deploy the initial data. Else, deploy the filter
    if(e.target.value == ''){
        deployCurrencys(crypto);
    }else{
        deployCurrencys(newData);
    }
});