import { createRouter, createWebHistory } from 'vue-router'
import AcceuilViews from '@/views/AcceuilViews.vue'
import ProduitsViews from '@/views/ProduitsViews.vue'


const routes = [
  {
    path:'/',
    name:'Acceuil',
    component: AcceuilViews
  },
  {
    path:'/produits',
    name:'Produits',
    component: ProduitsViews,
    children:[
      {
        path:'/',
        name:'article',
        component: () => import ('@/views/ArticleViews.vue')
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component: () => import ('@/views/LoginViews.vue')
  },
  {
    path:'/article/:id',
    name:'article',
    component: () => import ('@/views/ArticleViews.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'lien-actif'
})

export default router
