var tplCustomer = require('../templates/customer.string');
  var util = require('../utils/fn.js');

  SPA.defineView('customer',{
    html:tplCustomer,
    plugins:['delegated',{
         name:'avalon',
         options:function(vm){
          vm.livelist = [];
         }
    }],
    init:{
      vm:null,
      livelistArray:[],
      customerSwiper:null,
      homeHotSwiper:null,
      formatData: function(arr){
        var tempArr = [];
        for (var i= 0;i<Math.ceil(arr.length/4);i++){
            tempArr[i] = [];
            tempArr[i].push(arr[4*i]);
            tempArr[i].push(arr[4*i+1]);
            tempArr[i].push(arr[4*i+2]);
            tempArr[i].push(arr[4*i+3]);
        }
        return tempArr;
      }
    },
    bindActions:{
      'switch.tabs':function(e,data){
        this.customerSwiper.slideTo($(e.el).index());
          // util.setFocus(e.el);
          // this.modules.content.launch(data.tag);
    	},
       'search':function(){
         SPA.open('search', {
        ani: {
          name: 'actionSheet',
          distance: 300
        }
      });
       }


    },
    bindEvents:{

          'beforeShow':function(){
              var that = this;
               that.vm = that.getVM();
            $.ajax({
               url:'/TakeYouToPlay/mock/livelist.json',
              //  url:'/api/getLivelist.php',
              type:'get',
              data:{
                rtype:'origin'
              },
              success:function(rs){
                that.livelistArray = rs.data;
                that.vm.livelist =that.formatData(rs.data);

              }
            });
        },
        'show':function(){
        var that = this;

           that.customerSwiper = new Swiper('#customer-swiper',{
                loop:false,
                onSlideChangeStart:function(swiper){
                var index = swiper.activeIndex;
                var $lis = $('#customer-coach li');
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
                url:'/TakeYouToPlay/mock/livelist-more.json',
                //  url:'/api/getLivelist.php',
                 data:{
                   rtype:'more'
                 },
                 success:function(rs){
                      var newArray = that.livelistArray.concat(rs.data);
                      that.vm.livelist = that.formatData(newArray);
                      that.livelistArray = newArray;
                 }
             });

           }



        })



        }

    }
 });
