var tplRun = require('../templates/run.string');
  var util = require('../utils/fn.js');

  SPA.defineView('run',{
    html:tplRun,
    plugins:['delegated',{
         name:'avalon',
         options:function(vm){
          vm.run = [];
         }
    }],
    init:{
      vm:null,
      runArray:[],
      runSwiper:null,
        homeHotSwiper:null,
      formatData: function(arr){
        var tempArr = [];
          for (var i = 0; i < Math.ceil(arr.length); i++) {
    tempArr[i] = [];
          tempArr[i].push(arr[i]);
        }
        return tempArr;
      }
    },
    bindActions:{
      'goto.home': function(e,data){
            this.hide();
      },
      'run.tabs':function(e,data){

        this.runSwiper.slideTo($(e.el).index());

    	}
    },
     bindEvents:{
          'beforeShow':function(){
              var that = this;
               that.vm = that.getVM();
            $.ajax({
               url:'/TakeYouToPlay/mock/run.json',
              //  url:'/api/getLivelist.php',
              type:'get',
              data:{
                rtype:'run'
              },
              success:function(rs){
               that.runArray = rs.data;
               that.vm.run= that.formatData(rs.data);
              }
      });
      },
        'show':function(){
        var that = this;
        that.runSwiper = new Swiper('#run-swiper',{
             loop:false,
             onSlideChangeStart:function(swiper){
             var index = swiper.activeIndex;
             var $lis = $('#customer-run li');
             util.setFocus($lis.eq(index));
             }

         });

        var scrollSize = 30;
        var myScroll = this.widgets.homeHotScroll;
        myScroll.scrollBy(0,-scrollSize);

        myScroll.on('scroll',function(){
               var y = this.y,
               maxY = this.maxScrollY - y;

        });
        myScroll.on('scrollEnd',function(){

          // if(this.y>= -scrollSize  && this.y<0){
          //   myScroll.scrollTo(0, -scrollSize);
          // }
           var maxY = this.maxScrollY-this.y;
           var self = this;
           if(maxY > -scrollSize && maxY<0){
               myScroll.scrollTo(0, self.maxScrollY + scrollSize);
           }else if (maxY >=0){
             $.ajax({
                url:'/TakeYouToPlay/mock/run.json',
                //  url:'/api/getLivelist.php',
                 data:{
                   rtype:'run'
                 },
                 success:function(rs){
                      var newArray = that.runArray.concat(rs.data);
                      that.vm.run = that.formatData(newArray);
                      that.runArray = newArray;
                 }
             });

           }



        })



        }

}
 });
