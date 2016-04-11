module.exports = Backbone.View.extend({
  initialize: function (){
    this.model.on('change', this.render, this);
  },
  render: function(){
    var pagePricePost = document.getElementById('exchange');
    pagePricePost.textContent = this.model.get('price');
  },
});
