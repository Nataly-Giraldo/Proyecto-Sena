import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NosotrosView from '../views/NosotrosView'
import ClientesView from '../views/ClientesView'
import ServiciosView from '../views/ServiciosView'
import CatalogoView from '../views/CatalogoView'
import ContactosView from '../views/ContactosView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: NosotrosView
  },
  {
    path: '/clientes',
    name: 'clientes',
    component:ClientesView
  },
  
  {
    path: '/servicios',
    name: 'servicios',
    component: ServiciosView
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: CatalogoView
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: ContactosView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
