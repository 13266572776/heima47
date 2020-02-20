// 导入vue
import Vue from 'vue'
// 导入 vue-router
import VueRouter from 'vue-router'
//注册 vue-router
Vue.use(VueRouter)
// 准备组件
import login from "../views/login/index.vue"
// 实例化
const routes = [
    {
        path:"/login",
        component:login
    }
]
const router = new VueRouter({
  //这里就是路由的配制项
  routes 
}) 

// 暴露出去
export default router