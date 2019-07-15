import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/about',
            name:'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/work',
            name:'work',
            component: () => import('./views/Work.vue')
        },
        {
            path: '/monster-in-the-woods',
            name: 'Gorp',
            component: () => import('./views/UnityGorp.vue')
        }
    ]
})

export default router;