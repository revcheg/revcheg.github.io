var investor = document.querySelector('.counter__investor span');
var client = document.querySelector('.counter__client span');
var transactions = document.querySelector('.counter__transactions span');

function investorRandom (min, max) {
  var investorResult = Math.random() * (max - min) + min;
  investor.innerHTML = investorResult.toFixed();
};

function clientRandom (min, max) {
  var clientDefault = 4560;
  var clientResult = Math.random() * (max - min) + min;
  clientResult += clientDefault;
  client.innerHTML = clientResult.toFixed();
};

function transactionsRandom (min, max) {
  var transactionsDefault = 556520;
  var transactionsResult = Math.random() * (max - min) + min;
  transactionsResult += transactionsDefault;
  transactions.innerHTML = transactionsResult.toFixed();
};

setInterval( function () { 
  investorRandom(50, 500) 
}, 10800000);

setInterval( function () { 
  clientRandom(5, 30) 
}, 2073600000);

setInterval( function () { 
  transactionsRandom(1000, 10000) 
}, 2073600000);