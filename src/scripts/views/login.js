var tplLogin = require('../templates/login.string');
  var util = require('../utils/fn.js');

  SPA.defineView('login',{
    html:tplLogin,
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
