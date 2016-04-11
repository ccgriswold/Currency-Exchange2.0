var autoTradeMate = require('./views/autoTradeMate');

module.exports = Backbone.View.extend({
  initialize: function (){

    var clearingInterval = window.setInterval(autoTradeMate, 2000);
    var automateTrader = document.getElementById('autoTrader');
    var tradeStart = document.getElementById('autoTradeStart');
    var tradeStop = document.getElementById('autoTradeStop');

    tradeStart.addEventListener('click', function () {
      clearInterval(clearingInterval);
      automateTrader.textContent = "On";
      automateTrader.classList.remove('off');
      automateTrader.classList.add('on');
    });
    tradeStop.addEventListener('click', function () {
        clearInterval(clearingInterval);
        automateTrader.textContent = "Off";
        automateTrader.classList.remove('on');
        automateTrader.classList.add('off');
    });
  }
  });
