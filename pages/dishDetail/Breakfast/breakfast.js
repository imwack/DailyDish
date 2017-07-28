import menus from '../resource/BreakfastMenu.js'
var app = getApp()
Page({
  data: {
    menus: menus,
    selectedMenuId: 0,
  },
  selectMenu: function (event) {
    let data = event.currentTarget.dataset
    this.setData({
      toView: data.tag,
      selectedMenuId: data.id
    })
    //this.data.toView = 'red'
  },
  navBack: function (e) {
    wx.switchTab({
      url: '../../../pages/index/index',
    })
  },
  onLoad: function (options) {
    // var that = this
    // wx.request({
    //   url:app.globalData.appHost,
    //   method:'Get',
    //   success:function(res){
    //     that.setData({
    //       menus:res.data
    //     })
    //   },
    //   fail:function(res){
    //     console.log(res.errMsg)
    //   }
    // })
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onScroll: function (e) {
    console.log(e)
  }
})