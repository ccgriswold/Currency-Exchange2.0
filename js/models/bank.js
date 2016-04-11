module.exports = Backbone.Model.extend({
  defaults:{
    price: 500,
  },
  initialize: function(){
    var request = new XMLHttpRequest();
    function trinketPrice(){
      //make Trinkets money ajax request
      request.open('GET', 'http://trinkets.queencityiron.com/price');
      request.onload= function(){
        var coinPrice = JSON.parse(request.responseText);
        //Update the dom
        this.set('price', Math.round((coinPrice.price*100)/100));
      };
    request.send();
  }
  trinketPrice();
  setInterval(trinketPrice, 3000);
}
});
