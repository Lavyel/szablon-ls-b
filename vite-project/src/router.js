import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/my-view',
            name: 'MyView',
            component: () => import('./views/MyView.vue')
        },
    ]
  })