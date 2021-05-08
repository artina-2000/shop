import { createRouter, createWebHashHistory } from 'vue-router'
import Produits from '../views/Produits'
import Utilisateurs from '../views/Utilisateurs'
const routes = [
  {
    path: '/',
    name: 'Produits',
    component: Produits
  },
  {
    path: '/utilisateurs',
    name:'Utilisateurs',
    component: Utilisateurs
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
