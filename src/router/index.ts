import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/eventcinemas/home'
  },
  {
    path: '/eventcinemas/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/eventcinemas/home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'preferences',
        component: () => import('@/views/PreferencePage.vue')
      },
      {
        path: 'movies',
        component: () => import('@/views/MoviesPage.vue')
      },
      {
        path: 'movie',
        name: 'movie',
        props: true,
        component: () => import('@/views/MoviePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
