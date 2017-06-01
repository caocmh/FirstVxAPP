App({
  onLaunch: function (option) {
    console.log('App Launch', option.scene)
    console.log('scene:', option.scene)
    console.log('path:', option.path)
    console.log('query', option.query)
    console.log('shareTicket', option.shareTicket)
  },
  onShow: function (option) {
    console.log('App Show')
    console.log('scene:', option.scene)
    console.log('path:', option.path)
    console.log('query', option.query)
    console.log('shareTicket', option.shareTicket)
  },
  onHide: function () {
    console.log('App Hide')
  },
   globalData: 'I am global data'
})
