import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/documentasi',
      name: 'documentasi',
      component: () => import('../views/DocumentasiView.vue')
    },
    {
      path: '/kegiatan',
      name: 'kegiatan',
      component: () => import('../views/KegiatanView.vue')
    },
    {
      path: '/kegiatan1',
      name: 'kegiatan1',
      component: () => import('../views/Kegiatan/kegiatan1.vue')
    },
    {
      path: '/kegiatan2',
      name: 'kegiatan2',
      component: () => import('../views/Kegiatan/kegiatan2.vue')
    },
    {
      path: '/kegiatan3',
      name: 'kegiatan3',
      component: () => import('../views/Kegiatan/kegiatan3.vue')
    },
    {
      path: '/kegiatan4',
      name: 'kegiatan4',
      component: () => import('../views/Kegiatan/kegiatan4.vue')
    },
    {
      path: '/kegiatan5',
      name: 'kegiatan5',
      component: () => import('../views/Kegiatan/kegiatan5.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',//nama harus beda
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotFound.vue'),
    },
  ]
})

export default router
