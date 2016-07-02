
var tplHome = require('../templates/home.string');

  var util = require('../utils/fn.js');

  SPA.defineView('home',{
    html:tplHome,
    plugins:['delegated'],
    init:{
      mySwiper:null
    },
  bindActions:{
  'goto.run': function(e,data){

    SPA.open('run',{
      param:{
        data:data
      }
    });
  }

},
bindEvents: {
	show: function () {
		var mySwiper = new Swiper('.swiper-container',{
					loop:true,
					autoplay:2000
				});
        setTimeout(function(){
          $('.logo').hide();
        },2000)
}
}



  });
