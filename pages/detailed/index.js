// pages/detailed/index.js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

Page({
  /**
   * 页面的初始数据
   */
  data: {

    //时间用到的变量
    year: date.getFullYear(),
    month: date.getMonth(),
    value: [date.getFullYear(), date.getMonth()],
    years,
    months,

    //是否显示时间
    isShowPick: false
  },

  /**
   * @description 代码中的事件
   */
  //1、时间事件
  showPickFun () {
    this.setData({
      isShowPick: true
    })
  },
  bindEvent (e) {
    const val = e.detail.value;
    let value = [this.data.years[val[0]], this.data.months[val[1]]]
    this.setData({
      value: value
    })
  },
  saveBtn () {
    const val = this.data.value;
    this.setData({
      year: val[0],
      month: val[1],
      isShowPick: false
    })
  },
  cancleBtn () {
    let value = [date.getFullYear(), date.getMonth()];
    this.setData({
      isShowPick: false,
      value: value
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