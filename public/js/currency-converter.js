
function convertCurrency(){

    //debugger
       let from = document.getElementById("from").value;
       let to = document.getElementById("to").value;
       let fromAmount = document.getElementById("amount").value;
       let query = from+"_"+to;
       // let toAmount = document.getElementById("toAmount");
       // https://free.currencyconverterapi.com/api/v5/convert?q=USD_PHP,PHP_USD&compact=ultra
       let urlconvert= 'https://free.currencyconverterapi.com/api/v5/convert?q=' + query + '&compact=ultra';
       fetch(urlconvert).then(response=>{
           return response.json();   
   }).then(rates=> {
        
        let amount = fromAmount * rates[query];
        document.getElementById("result").value = amount.toFixed(2);
       //  console.log(amount)
   });
   }
   // convertCurrency();