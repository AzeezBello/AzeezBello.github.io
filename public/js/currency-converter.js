

function convertCurrency(){
 debugger
    let from = document.getElementById("from")[0].value;
    let to = document.getElementById("to")[0].value;
    let fromAmount = document.getElementById("fromAmount").value;
    let toAmount = document.getElementById("toAmount");
    https://free.currencyconverterapi.com/api/v5/convert?q=USD_PHP,PHP_USD&compact=ultra
    let urlconvert= 'https://free.currencyconverterapi.com/api/v5/convert?q='
    + query + '&compact=ultra';
    fetch(urlconvert).then(response=>{
        return response.json();   
}).then(rates=> {
    console.log(rates);
    for(let rate in rates){
        console.log(rates[rate]);
        let calc = rates[rate];
        console.log(calc, fromAmount)
        //you need to pass rate back into the object
        let total =(calc * fromAmount);
        console.log(total);
        //calculation
        console.log(total);
        toAmount.value= total;
    }
});
}