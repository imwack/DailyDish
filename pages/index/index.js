//index.js
//获取应用实例
import ImageAPI from '../../api/swiper.js'
var app = getApp()
Page({
  data: {
    titleImage:[],
  },
  initImages(){
    this.setData({
      titleImage: ImageAPI.loadImages()
    });
  },
  imageNavClick:function(e){
    wx.switchTab({
      url: '../../pages/dishDetail/lunch',
    })
  },
  itemClick:function(e){
    wx.showToast({
      title: "Click",
      icon:'success',
      duration:2000
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.initImages();
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
})

