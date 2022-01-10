import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Logiin" */ '../views/Logiin.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "RegisterAccount" */ '../views/RegisterAccount.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "News" */ '../views/News.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "Services" */ '../views/Services.vue')
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import(/* webpackChunkName: "Payments" */ '../views/Payments.vue')
  },
  {
    path: '/receipts',
    name: 'receipts',
    component: () => import(/* webpackChunkName: "Receipts" */ '../views/Receipts.vue')
  },
  {
    path: '/condominiums',
    name: 'condominiums',
    component: () => import(/* webpackChunkName: "Receipts" */ '../views/Condominium.vue')
  },
  {
    path: '/properties',
    name: 'properties',
    component: () => import(/* webpackChunkName: "Receipts" */ '../views/Properties.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
