import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 导入css样式
import "./style/base.css"
Vue.config.productionTip = false
// 导入路由 // 默认优先找js文件
import router from './router/index.js'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')