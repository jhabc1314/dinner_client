// pages/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchResult:[]
  },

  /**
   * 提交搜索 
   */
  formSubmit:function(e) {
    //console.log(e.detail.value)
    var vm = this
    wx.request({
      url: app.globalData.domain + "/search", //仅为示例，并非真实的接口地址
      data: {
        keyword: e.detail.value.keyword,
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
            title: '搜索失败',
            icon: 'fail',
            duration: 1500
          })
        } else {
          vm.setData({
            searchResult:resp.data
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

  restaurant: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '../restaurant/restaurant?restaurant_id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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