//index.js
//获取应用实例
const app = getApp()
var WxDraw = require("../../utils/wxdraw.js").WxDraw;
var Shape = require("../../utils/wxdraw.js").Shape;
var AnimationFrame = require("../../utils/wxdraw.js").AnimationFrame;

// console.log(cancelAnimationFrame);

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    wxCanvas:null

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindtouchstart:function(e){
    // 检测手指点击事件
     this.wxCanvas.detect(e);
    
  },
  bindtouchmove:function(e){
    // 检测手指点击 之后的移动事件
    this.wxCanvas.moveDetect(e);
  },
  bindtouchend:function(e){
     //检测手指点击 移出事件
    this.wxCanvas.upDetect(e);
  },
  detect:function(e){
   
  },
  touchDown:function(){
   
  },
  touchUp:function(){

  },
  onLoad: function () {
    /** 
     * 
     */
    // console.log(requestAnimationFrame);
    var context = wx.createCanvasContext('first')


   

    // Fill with gradient


    // this.wxCanvas = new WxDraw(context,0,0,400,500);
    /**
     * 由于 小程序没有Dom 操作，所以没法获取canvas高度以及绘图的起点
     * 所以 wxDraw初始化的时候 需要设置 以便点击检测的时候使用
    */

    // this.wxCanvas.add(new Shape('circle',{x:20,y:20,r:20,fillStyle:"#333333"},true));

    // var cir1 = new Shape('line', {
    //   fillStyle: "#000000", rotate: Math.PI / 2, points: [
    //     [145, 30], [0, -211], [300, 400],
    //     [113, 50], [30, -31], [3, 40],
    //     [123, 90], [20, -1], [30, 60],
    //     [131, 40], [90, -12], [0, 400],
    //     [13, 6], [70, -17], [30, 42]],lineWidth:12}, true,true)
  
    // var cir2 = new Shape('rect', { x: 0, y: 60, w: 40, h: 40, fillStyle: "#000000", rotate: 200}, true,true)

    // var cir3 = new Shape('polygon', { x: 0, y: 300, r: 20, sides: 5,rotate:0}, true, true)
 
    // var cir3 = new Shape('circle', { x: 200, y: 300, r: 10, sides: 10, rotate: Math.PI/4,Shadow:{
    //   color:"#000000"
    // } }, false, true)
        
    // // cir3.setOrigin([40,40])
    // console.log(cir3);
    // this.wxCanvas.add(cir1);
    // this.wxCanvas.add(cir3);
    
    // // cir1.updateOption({x:100})
    // this.wxCanvas.add(cir2);
    // console.log(cir2);
    // cir2.updateOption({ x: 200 })
    // setTimeout(function(){
    //   cir2.updateOption({ x: 100 })
    // },2000);

    console.log(this.wxCanvas);
    // cir1.animate({
    //   "x":"+=100",
    //   "y":"+=100",
    //   "r":"+=100"

    // // },{
    // //   duration: 4000,
    // //   onLooping: function () {
    // //     console.log('***');
    // //   },
    // //   easing: "bouncePast"
    // //   }).animate({ 'rotate': Math.PI, "x": "-=20", y: 200 }, {
    // //     duration: 2000,
    // //     onLooping: function () {
    // //       console.log('----');
    // //     },
    // //     easing: "bouncePast"
    // //   });


    // cir1.animate({rotate: "+=200", strokeStyle:"#429398"}, {
    //     duration: 1000,
    //     onLooping: function () {
    //       console.log('----');
    //     },
    //     easing: "linear"
    // }).start(1);
    // cir1.animate("y", "-=500", {
    //   duration: 10000,
    //   onLooping: function () {
    //     console.log('----');
    //   },
    //   easing: "bouncePast"
    // }).start();
    // .animate({ 'rotate': Math.PI, "x": "+=200", y: 400 }, {
    //   duration: 2000,
    //   onLooping: function () {
    //     console.log('----');
    //   },
    //   easing: "bouncePast"
    //   }).animate({ 'rotate': -1*Math.PI, "x": 200, y: 260 }, {
    //     duration: 2000,
    //     onLooping: function () {
    //       console.log('----');
    //     },
    //     easing: "bouncePast"
    //   }).start(5);



    // cir2.animate({ "fillStyle": "#ff0000", "x": "+=100"}, {
    //   duration: 1000,
    //   onLooping: function () {
    //      console.log('动画1');
    //   },
    //   easing: "linear"
    // }).animate({"x":"+=100","y":"+=200"},{duration:2000})
    //   .animate({ "rotate": "+=100", "y": "-=200" }, { duration: 2000, easing: "easeTo" })
    //   .animate({ "w": "+=100", "h": "-=10", "fillStyle":"#CDECCC" }, { duration: 4000, easing:"bouncePast" }).
    //   animate({ "w": "-=100", "h": "+=40", "fillStyle": "#B3204D", "rotate": "+=10", }, { duration: 4000, easing: "bouncePast" })
    //   .start();


      
    // cir1.updateOption({ lineJoin:"round"})
    // cir1.updateOption({
    //   lineCap:"butt"
    // })
    // cir3.animate({
    //    Shadow: {
    //     color: "#E84A5F",
    //     offsetX:200,
    //     offsetY:200,
    //     blur:100
    //   }}, {
    //   duration: 5000,
    //   onLooping: function () {
    //     console.log('动画2'
        
        
    //     );
    //   },
   
    //   easing: "linear"
    // }).start(1);




    // cir2.animate({
    //   Shadow: {
    //     color: "#E84A5F",
    //     offsetX: 200,
    //     offsetY: 200,
    //     blur: 100
    //   }
    // }, {
    //     duration: 5000,
    //     onLooping: function () {
    //       console.log('动画2'


    //       );
    //     },

    //     easing: "linear"
    //   }).start(1);




    // cir3.animate({ "rotate": "+=" + 2 * Math.PI, "fillStyle": "#ff0000",x:"-=400",r:"-=40"}, {
    //   duration: 4000,
    //   onLooping: function () {
    //     console.log('动画2'


    //     );
    //   },
    //   easing: "linear"
    // }).start(200);  
    // this.wxCanvas.add(new Shape('circle', { x: 200, y: 20, r: 20 }, true))
    // this.wxCanvas.add(new Shape('rect', { x: 200, y: 20, w: 40,h:50 }))
    // this.wxCanvas.add(new Shape('polygon', { sides:876,r:100}))
   
  




    // this.wxCanvas.draw();
    // context.draw();
    
    const grd = context.createLinearGradient(100, 10, 250,10)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'white')
    context.setFillStyle(grd)
    context.fillRect(100, 10, 150, 80)
    context.draw()
  }
})
