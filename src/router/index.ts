import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import ProjectDetailPage from '../pages/ProjectDetailPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/projects/:slug', name: 'project', component: ProjectDetailPage, props: true },
    { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFoundPage },
  ],
  scrollBehavior(to) {
    // For anchor links like #contact
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
