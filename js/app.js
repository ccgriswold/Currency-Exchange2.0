window.addEventListener('load', function(){

  //All imported modules

  var Wallet = require('./models/wallet');
  var CurrentFakeMonPrice = require('./models/bank');
  //var TrinkAccount = require('./models/trinkaccount');
  var UpdatePrice = require('./views/priceupdate');
  var OtherMoneys = require('./views/othercurrencies');
  var Exchange = require('./views/exchangefuncs');
  var Controlers = require('./views/controlers');

  //Begin imported function activation

  var monPock = new CurrentFakeMonPrice();
  var magicPocket = new Wallet(monPock);
  var price = new UpdatePrice({
    model: monPock,
    el: document.getElementById('exchange'),
  });
  var controlers = new Controlers({
    model: magicPocket,
    el: document.getElementById('Options'),
  });
  var myWealth = new Exchange({
    model: magicPocket,
    el: document.getElementById('resources'),
  });

  //Auto Buying/Selling functions

  function setAutoBuy(){
    if(magicPocket.get('price') < 40){
      magicPocket.buy(1);
    }else if(magicPocket.get('price') < 30){
      magicPocket.buy(5);
    }else if(magicPocket.get('price') < 20){
      magicPocket.buy(10);
    }
  }
  function setAutoSell(){
    if(magicPocket.get('price') > 50){
      magicPocket.buy(1);
    }else if(magicPocket.get('price') < 65){
      magicPocket.buy(5);
    }else if(magicPocket.get('price') < 70){
      magicPocket.buy(10);
    }
  }
  function Trade(){
    setAutoBuy();
    setAutoSell();
  }

});
