var tplIndex = require('../templates/index.string');

var util = require('../utils/fn.js');

SPA.defineView('index',{
html:tplIndex,
plugins:['delegated'],

modules:[{
      name:'content',
      views:['home','together','chat','customer','my'],
      defaultTag:'home',
      container:'.l-container'
  }],

bindActions:{
  'switch.tabs':function(e,data){
      util.setFocus(e.el);
        this.modules.content.launch(data.tag);
	}

}



});
