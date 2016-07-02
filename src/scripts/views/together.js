var tplTogether = require('../templates/together.string');
  var util = require('../utils/fn.js');

  SPA.defineView('together',{
    html:tplTogether,
    plugins:['delegated'],
    init:{
      mySwiper:null
    }
//   bindAction:{
//   'tap.slide': function(e){
//     this.mySwiper.slideTo($(e.el).index())
//   }
//
// },




  });
