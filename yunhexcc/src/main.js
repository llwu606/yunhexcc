import Vue from 'vue'
import App from './App'
require ('./weui.css')

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main', 'pages/cjjx/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '潮机店猿',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#000000',
      borderStyle: 'white',
      backgroundColor: '#f8f9fb',
      list: [
        {
          text: '首页',
          pagePath: 'pages/index/main',
          iconPath: 'static/images/star.png',
          selectedIconPath: 'static/images/star_1.png'
        },
        {
          text: '关注',
          pagePath: 'pages/follow/main',
          iconPath: 'static/images/star.png',
          selectedIconPath: 'static/images/star_1.png'
        },
        {
          text: '活动',
          pagePath: 'pages/activity/main',
          iconPath: 'static/images/star.png',
          selectedIconPath: 'static/images/star_1.png'
        },
        {
          text: '消息',
          pagePath: 'pages/news/main',
          iconPath: 'static/images/star.png',
          selectedIconPath: 'static/images/star_1.png'
        },
        {
          text: '我的',
          pagePath: 'pages/mine/main',
          iconPath: 'static/images/admire.png',
          selectedIconPath: 'static/images/admire_1.png'
        }
      ]
    }
  }
}
