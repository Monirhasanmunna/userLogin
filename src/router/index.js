import { createRouter, createWebHistory } from 'vue-router'
const Home = ()=> import('../views/HomeView.vue');
const Welcome = ()=> import('../views/AboutView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
  ]
})

export default router
