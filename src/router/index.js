import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('../views/FilmsView.vue')
    },
    {
      path: '/films/:id',
      name: 'filmDetails',
      component: () => import('../views/FilmDetailsView.vue')
    },
    {
      path: '/:notFound',
      name: 'notFound',
      component: NotFound
    }
  ]
})

export default router
