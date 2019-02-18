// in the event of a Cross-Origin Read Blocking (CORB) error, run the snippet in a tab with the API URL open.

const exchangeAPI = 'https://api.binance.com/api/v1/exchangeInfo';

fetch(exchangeAPI).then(function(response) {
  return response.json();
}).then(function(myBlob) {
  const symbols = [];

  myBlob.symbols.forEach(symbol => {
  let position;
    position = symbols.indexOf(symbol.baseAsset);
    if (!~position) {
      symbols.push(symbol.baseAsset);
    }
  });

  symbols.forEach(value => console.log(value));
  console.log(symbols.length);
});
