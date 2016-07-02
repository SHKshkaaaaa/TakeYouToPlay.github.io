var tplChat = require('../templates/chat.string');
  var util = require('../utils/fn.js');

  SPA.defineView('chat',{
    html:tplChat,
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
