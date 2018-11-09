// pages/auth/auth.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authImgUrl:"../../images/auth_index.jpg",
    notice : [
      {message:"目前只支持饿了么，请确认您已注册饿了么"},
      {message:"当前项目仅供学习交流，不涉及用户隐私，如有侵权请及时联系处理"},
      {message:"联系邮箱：1139209675@qq.com"}
    ],
    disabled:false,
    loading:false

  },

/**
 *  设置搜索loading，发起搜索商品请求
 */
  searching:function(e) {
    // this.setData({
    //   loading: !this.data.loading,
    //   disabled:!this.data.disabled,
    // })
    wx.navigateTo({
      url: '../search/search',
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
    //获取用户当前位置
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        app.globalData.latitude = res.latitude
        app.globalData.longitude = res.longitude
      },
      fail (res) {
        wx.showToast({
          title: '定位失败',
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