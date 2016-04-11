module.exports = Backbone.View.extend({
  initialize: function(){
    this.setPrice();
    this.model.on('change', this.render, this);
  },
  render: function(){
    document.getElementById('coin-wealth').textContent = Math.round(this.model.get('currentCoin')*100) /100;
    document.getElementById('trinket-wealth').textContent = this.model.get('trinkets');
    document.getElementById('fireSave').textContent = Math.round(this.model.get('bankSavings')*100 /100);
  },
});
