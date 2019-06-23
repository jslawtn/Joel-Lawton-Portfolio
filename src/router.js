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
            path: '/About',
            name:'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/Work',
            name:'work',
            component: () => import('./views/Work.vue')
        },
        {
            path: '/web-test',
            name: 'webTest',
            component: () => import('./views/WebTest.vue')
        }
    ]
})

export default router;