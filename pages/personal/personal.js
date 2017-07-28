var app = getApp()
Page( {
  data: {
    userInfo: {},
    userListInfo: [ {
      icon: '../../images/love-3.png',
      text: '我喜欢的',
      isunread: true,
      unreadNum: 2
    }, {
        icon: '../../images/star.png',
        text: '我的收藏',
        isunread: false,
        unreadNum: 2
      },{
        icon: '../../images/question.png',
        text: '常见问题'
      }, {
        icon: '../../images/pencil.png',
        text: '提供建议'
      },{
        icon: '../../images/contact.png',
        text: '联系我们'
      }]
  },

  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  }
})