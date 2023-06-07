import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'; // Importa el módulo de autenticación o autorización

const isAuthenticated = (to, from, next) => {
  // Comprueba si el usuario está autenticado (puedes ajustar la lógica según tu implementación)
  if (store.state.authenticated) {
    // Usuario autenticado, permite el acceso a la ruta
    next();
  } else {
    // Usuario no autenticado, redirige a la página de inicio de sesión o muestra un mensaje de error
    next('/login');
  }
};

const routes = [
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
    component: () => import('../views/Pharmacy/PharmacyCreate.vue'),
    beforeEnter: isAuthenticated, // Aplica el guard de navegación
  },
  {
    path: '/pharmacy',
    name: 'PharmacyIndex',
    component: () => import('../views/Pharmacy/PharmacyIndex.vue'),
    beforeEnter: isAuthenticated,
  },
  {
    path: '/pharmacy/:id/edit',
    name: 'PharmacyEdit',
    component: () => import('../views/Pharmacy/PhrmacyEdit.vue'),
    props: true,
    beforeEnter: isAuthenticated, 
  },
  {
    path: '/',
    name: 'inicio',
    component: () => import('../views/Inicio.vue')
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;