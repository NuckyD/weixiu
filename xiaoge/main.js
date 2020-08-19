import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 进入页面的loading加载
import homeload from './elements/homeload.vue'
Vue.component('home-load',homeload)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
