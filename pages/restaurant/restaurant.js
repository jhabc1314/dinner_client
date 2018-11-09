// pages/restaurant/restaurant.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      restaurant_id: '',
      restaurant_info:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      this.setData({
        restaurant_id: options.restaurant_id
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      //请求获取店铺的具体信息
      //https://h5.ele.me/pizza/shopping/restaurants/2328748/batch_shop?
      //code=0.7609663372418305&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=31.187237&longitude=121.377663
    var vm = this
    wx.request({
      url: app.globalData.domain + "/restaurant/" + vm.restaurant_id + "/info", 
      data: {
        lat:app.globalData.latitude,
        lng:app.globalData.longitude
      },
      dataType:"json",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        //console.log(res.data)
        var resp = res.data
        console.log(resp.code)
        if (resp.code != 200) {
          //fail
          wx.showToast({
            title: '店铺不存在',
            icon: 'fail',
            duration: 1500
          })
        } else {
          vm.setData({
            restaurant_info:resp.data
          })
        }
      },
      fail (res) {
        wx.showToast({
          title: '服务器丢失',
          icon: 'fail',
          duration: 1500
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})