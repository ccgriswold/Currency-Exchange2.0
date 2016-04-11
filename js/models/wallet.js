module.exports = Backbone.Model.extend({

  initialize: function(monPock){
    monPock.on('change: price', this.setPrice, this);
  },
  defaults: {
    //Current account coin balance
    currentCoin: 0,
    //Current account trinket balance
    trinkets: 0,
    //Current ticker price from server
    price: 0,
    savedAmount: 0,
    bankSavings: 0,
  },


  setPrice: function(monPock){
    this.set('price', monPock.get('price'));
  },
  buy: function(trans){
    //Actions of buying
    if(this.get('currentCoin') >= (this.get('price') * trans)){
      this.set('currentCoin', this.get('currentCoin') - (this.get('price') * trans) + this.get('savedAmount'));
      this.set('bankSavings', (this.get('bankSavings') - this.get('savedAmount')));
      this.set('trinkets', this.set('trinkets') + trans);
    }else if (this.get('currentCoin') < (this.get('price') *trans)){
      //If you dont have enough money to buy activate alert
      alert("Get more money to buy things, Foolish money manager!");
    }
    //Updates Firebase
    fireBurn.child('coins').set(Math.round(bankSavings*100)/100);
    fireBurn.child('trinkets').set(trinkets);
  },
  sell: function(trans){
    //Actions of selling
    if(this.get('trinkets') >= trans){
      this.set('savedAmount', (this.get('price') * trans));
      this.set('currentCoin', this.get('currentCoin') + (this.get('price') * trans) - this.get('savedAmount'));
      this.set('bankSavings', (this.get('bankSavings') + this.get('savedAmount')));
      this.set('trinkets', this.get('trinkets') - trans);
    }else if (this.get('trinkets') < 0){
      //If you dont have enough trinkets to sell activate alert
      alert("You've sold off everything! If this was a firesale, you'd be on fire!");
    }
    //Updates Firebase
    fireBurn.child('coins').set(Math.round(savedAmount*100)/100);
    fireBurn.child('trinkets').set(trinkets);
  }
});
