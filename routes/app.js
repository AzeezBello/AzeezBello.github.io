var https = require('https');

function convertCurrency(amount, fromCurrency, toCurrency, cb) {
  var apiKey = 'your-api-key-here';

  fromCurrency = encodeURIComponent(fromCurrency);
  toCurrency = encodeURIComponent(toCurrency);
  var query = fromCurrency + '_' + toCurrency;

  var url = 'https://free.currencyconverterapi.com/api/v5/convert?q=USD_PHP&compact=y';

  https.get(url, function(res){
      var body = '';

      res.on('data', function(chunk){
          body += chunk;
      });

      res.on('end', function(){
          try {
            var jsonObj = JSON.parse(body);

            console.log(jsonObj);

            var val = jsonObj[query];
            console.log(val.val);
            if (val) {
              var total = val * amount;
              cb(null, Math.round(total * 100) / 100);
            } else {
              var err = new Error("Value not found for " + query);
              console.log(err);
              cb(err);
            }
          } catch(e) {
            console.log("Parse error: ", e);
            cb(e);
          }
      });
  }).on('error', function(e){
        console.log("Got an error: ", e);
        cb(e);
  });
}

//uncomment to test
convertCurrency(108, 'USD', 'PHP', function(err, amount) {
  console.log(amount);
});
