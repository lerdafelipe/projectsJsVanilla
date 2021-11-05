const styleConditional = (element)=>{
    if(element.price_change_percentage_24h>0){
        return 'green'
    }else return 'red'
};

const deployCurrencys = async (data)=>{
    let fragment = '';
    let number = 0;
    for await(let element of data) {
        number = number +1;
            fragment += `<tr>
                        <td style="text-align: center;">${number}</td>
                        <td><img style="width:20px;height:20px; margin-right:15px;" src=${element.image} alt='${element.name}'/>${element.name} <span style="color: #bbbbbb; margin-left: 15px;">${(element.symbol).toUpperCase()}</span></td>
                        <td>U$D ${(element.current_price).toFixed(2)}</td>
                        <td style="text-align: center; color:${styleConditional(element)};font-weight:500;">${(element.price_change_percentage_24h).toFixed(2)}%</td>
                        <td style="text-align: center;">${element.total_volume}</td>
                    </tr>`
    }
    console.log(fragment);
    document.getElementById('cryptoDiv').innerHTML=fragment;
}

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false')
.then(data=>data.json()).then(datos=>deployCurrencys(datos));