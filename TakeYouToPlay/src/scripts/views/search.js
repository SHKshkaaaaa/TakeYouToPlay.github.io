var sa = require('../lib/swiper.animate1.0.2.min.js');
var tplSearch = require('../templates/search.string');

SPA.defineView('search', {
  html: tplSearch,

  plugins: ['delegated'],

  // styles: {
  //   background: 'transparent !important'
  // },

  bindActions: {
    'close': function () {
      this.hide();
    }
  },

  bindEvents: {
    show: function () {

  }
}
});
