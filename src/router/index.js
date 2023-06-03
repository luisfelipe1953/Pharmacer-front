import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Auth/Register.vue')
    },
    {
      path: '/mapa',
      name: 'Mapa',
      component: () => import('../views/Mapa.vue')
    },
    {
      path: '/pharmacy/create',
      name: 'PharmacyCreate',
      component: () => import('../views/Pharmacy/PharmacyCreate.vue')
    },
    {
      path: '/pharmacy',
      name: 'PharmacyIndex',
      component: () => import('../views/Pharmacy/PharmacyIndex.vue')
    },
    {
      path: '/pharmacy/:id/edit',
      name: 'PharmacyEdit',
      component: () => import('../views/Pharmacy/PhrmacyEdit.vue'),
      props: true, // Pasa el parámetro id como una propiedad
    },
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/Inicio.vue')
    },
  ]
})

export default router
