import menus from './resource/LunchMenu.js'
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
  TestClick:function(e){
    wx.showToast({
      title: "Click",
      icon: 'success',
      duration: 2000
    })
  },
  navBack: function (e) {
    wx.switchTab({
      url: '../../pages/index/index',
    })
  },
  click_like:function (e){
    var that = this
    var dish_name = e.currentTarget.id;
    var menus_temp = that.data.menus;

    for (var j = 0; j < menus_temp.length; j++) {
      var obj = menus_temp[j]["Dishes"];
      for (var i = 0; i < obj.length; i++) {
        if (obj[i].Name == dish_name){
          if (obj[i].LikePic == "../../images/good-red.png")
            break;
          obj[i].Like++;
          obj[i].LikePic = "../../images/good-red.png";
        }
      }
    }
    that.setData({
      menus: menus_temp
    })
  },
  click_dislike:function(e) {
    var that = this
    var dish_name = e.currentTarget.id;
    var menus_temp = that.data.menus;

    for (var j = 0; j < menus_temp.length; j++) {
      var obj = menus_temp[j]["Dishes"];
      for (var i = 0; i < obj.length; i++) {
        if (obj[i].Name == dish_name) {
          obj[i].DisLike++;
        }
      }
    }
    that.setData({
      menus: menus_temp
    })
  },
   onLoad: function (options) {
     var that = this
     var menus_temp = that.data.menus;
     //console.log(menus_temp)
     for (var j = 0; j < menus_temp.length; j++) {
       var obj = menus_temp[j]["Dishes"];
       for (var i = 0; i < obj.length; i++) {
         var o = obj[i];
         o.LikePic = "../../images/good.png"
         o.Like = parseInt(Math.random() * 30, 10);
         o.DisLike = parseInt(Math.random()*10 , 10);
         o.Comment = parseInt(Math.random() * 10, 10);
         
       }
     }

     that.setData({
       menus: menus_temp
     })
  //   wx.request({
  //     url:app.globalData.appHost,
  //     method:'Get',
  //     success:function(res){
  //       that.setData({
  //         menus:res.data
  //       })
  //     },
  //     fail:function(res){
  //       console.log(res.errMsg)
  //     }
  //   })
  //   // 页面初始化 options为页面跳转所带来的参数
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