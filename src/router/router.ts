import HomePage from "@/views/HomePage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path:      '/',
    name:      'Home',
    component: HomePage,
  },
  {
    path:      '/privacy',
    name:      'PrivacyPage',
    component: () => import('@/views/PrivacyPage.vue'),
  },
  {
    path:      '/cookies',
    name:      'CookiesPage',
    component: () => import('@/views/CookiePage.vue'),
  },
  {
    path:      '/german-courses',
    name:      'GermanCourses',
    component: () => import('@/views/GermanCourses.vue')
  },
  {
    path:      '/italian-courses',
    name:      'ItalianCourses',
    component: () => import('@/views/ItalianCourses.vue')
  },
  {
    path:      '/spanis-courses',
    name:      'SpanishCourses',
    component: () => import ('@/views/SpanishCourses.vue')
  },
  {
    path:      '/english-courses',
    name:      'EnglishCourses',
    component: () => import('@/views/EnglishCourses.vue')
  },
  {
    path:      '/workshop-courses',
    name:      'WorkshopCourses',
    component: () => import('@/views/WorkshopCourses.vue')
  },
  {
    path:      '/legal-translation',
    name:      'LegalTranslation',
    component: () => import('@/views/LegalTranslations.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router;