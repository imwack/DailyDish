const API = 'http://localhost:4096/api/Contact'
const get = (cmd, params, callback) => {
  wx.showToast({
    title: '数据加载中...',
    icon: 'loading',
    duration: 2000
  })
  wx, wx.request({
    url: API + (cmd ? ('/' + cmd) : ''),
    data: params,
    header: {},
    method: '',
    dataType: '',
    success: (res) => {
      wx.hideToast()
      const data = res.data
      if (data.code) {
        wx.showModal({
          title: '提示',
          content: false,
          confirmColor: '#ff6600',
          content: data.message,
          success: (res) => {
          }
        })
        return
      }
      if(typeof(callback) == 'function')
      callback(data.data)
    }
  })
}

const post = (cmd, params, callback) => {
  wx.showToast({
    title: '数据提交中...',
    icon: 'loading',
    duration: 2000
  })
  wx.request({
    url: API + (cmd ? ('/' + cmd) : ''),
    data: params,
    method: 'POST',
    success: (res) => {
      const data = res.data
      if (data.code) {
        wx.showModal({
          title: '提示',
          showCancel: false,
          confirmColor: '#ff6600',
          content: data.message,
          success: (res) => {
          }
        })
        return
      }
      if (typeof (callback) == 'function')
        callback(data.data)
    }
  })
}

export default {
  get: get,
  post: post
}