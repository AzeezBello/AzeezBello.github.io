fetch('https://free.currencyconverterapi.com/api/v5/convert?q=USD_PHP&compact=y').then(function(response) {
    return response.json();
  }).then(function(myJson) {
    console.log(myJson);
  }).catch(function(){
    console.log('it failed');
  });