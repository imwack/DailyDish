import menus from '../dishDetail/resource/menu.js'
var app = getApp()
Page({
  data: {
    menus: menus,
    dish:0,
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
      url: '../../pages/index/index',
    })
  },
  onLoad: function (options) {
    var that = this
    var menus_temp = that.data.menus;
    var dish = []
    //console.log(menus_temp)
    for (var j = 0; j < menus_temp.length; j++) {
      var obj = menus_temp[j]["Dishes"];
      for(var i=0;i<obj.length;i++){
        dish.push(obj[i]);
      }
    }
    dish.sort(compare("like"));   //按照like排序
    that.setData({
      dish: dish
    })
    //console.log(dish)

    function compare(propertyName) {
      return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value2 < value1) {
          return -1;
        }
        else if (value2 > value1) {
          return 1;
        }
        else {
          return 0;
        }
      }
    }

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
  },

})