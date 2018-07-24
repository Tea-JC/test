//lists.js
//获取应用实例
var app = getApp()

Page({
  data: {
    newsList: [
      { id: 1, title: "aaaaaa", img: "../../image/1.png", cTime: "2016-09-26  21:40" },
      { id: 2, title: "bbbbbb", img: "../../image/2.png", cTime: "2016-09-26  21:40" },
      { id: 3, title: "cccccc", img: "../../image/3.png", cTime: "2016-09-26  21:40" },
      { id: 4, title: "dddddd", img: "../../image/4.png", cTime: "2016-09-26  21:40" }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})
