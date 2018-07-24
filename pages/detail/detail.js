//aboutme.js
//获取应用实例
const app = getApp()

Page({
  data: {
   info:{
     id: 1, 
     title: "aaaaaa", 
     img: "../../image/1.png",
     cTime: "2016-09-26  21:40",
     content:"所谓的“四天工作制”，最初并不是指一周只工作四天，而是每周都有一天可以让员工做自己岗位职责之外的事情。发展到现在，一些欧美国家的政府机构和私企已经开始大力推行一周4天工作制。在保证工作总量不变的前提下，采取一周4天工作制的单位，人们一天要上10个小时的班，而许多人也欣然接受了这种变化。不少人认为，这样一来他们每周可以少支出两笔交通费，多享受一天的假日。有些国家甚至出台政策，让一部分员工先试行“四天工作制”，并对这部分员工给予一定补贴，以奖励他们节约能源。"
   }
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
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
