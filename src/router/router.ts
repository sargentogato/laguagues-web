import HomePage from "@/views/HomePage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path:      '/',
    name:      'Home',
    component: HomePage
  },
  {
    path:      '/privacy',
    name:      'privacyPage',
    component: () => import('@/views/PrivacyPage.vue')
  },
  {
    path:      '/cookies',
    name:      'cookiesPage',
    component: () => import('@/views/CookiePage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router;