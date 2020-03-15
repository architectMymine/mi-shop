import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import VueLazyLoad from 'vue-lazyload'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

//基础设置
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

//返回拦截
axios.interceptors.response.use(function (response) {
    let res = response.data
    let path = location.hash
    if (res.status === 0) {
        return res.data
    } else if (res.status === 10) {
        if(path !== '#/index'){
            window.location.href = '/#/login'
            return Promise.reject(res)
        }
      
    } else {
        Message.warning(res.msg)
        return Promise.reject(res)
    }
})
Vue.use(VueCookie)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
    loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.prototype.$message = Message
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
