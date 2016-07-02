var tplGuide=require('../templates/guide.string');

SPA.defineView('guide',{
	html: tplGuide,
	plugins: ['delegated'],
	bindEvents : {
		show:function(){
	    	setTimeout(function(){
		      SPA.open('index');
	    	}, 2000);
		}
	}
})
