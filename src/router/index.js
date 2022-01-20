import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import(/* webpackChunkName: "Recommend_521" */ '@/views/recommend')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search_521" */ '@/views/search')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import(/* webpackChunkName: "Singer_521" */ '@/views/singer')
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: () => import(/* webpackChunkName: "TopList_521" */ '@/views/top-list')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
