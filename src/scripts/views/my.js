var tplMy = require('../templates/my.string');
  var util = require('../utils/fn.js');

  SPA.defineView('my',{
    html:tplMy,
    plugins:['delegated'],
    init:{
      mySwiper:null
    },
  bindActions:{
  'login-to': function(e,data){
    console.log(0);
    SPA.open('login')
  }

}




  });
