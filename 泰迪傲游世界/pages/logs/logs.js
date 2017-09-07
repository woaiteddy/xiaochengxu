//logs.js
const util = require('../../utils/util.js')

const app = getApp()
Page({
  data: {
    name: 'ai'
  },
  onPullDownRefresh() {
    console.log("去做事");
  },
  onReachBottom() {
    console.log("去做事");
  },
  onShareAppMessage: function () {
    return {
      title: '谢谢转发',
      path: '/page/logs/logs'
    }
  },
  changeName() {
    this.setData({
      name: "li"
    })
  }
})
