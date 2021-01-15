import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
import store from './store/index'

Vue.use(Router)


const router = new Router({
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: 'dashboard',
            component: DashboardLayout,
            meta: {
                authRequired: true
            },
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: '/icons',
                    name: 'icons',
                    component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: '/maps',
                    name: 'maps',
                    component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue'),
                    meta: {
                        authRequired: true
                    }
                },
                {
                    path: '/tables',
                    name: 'tables',
                    component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue'),
                    meta: {
                        authRequired: true
                    }
                }
            ]
        },
        {
            path: '/',
            redirect: 'login',
            component: AuthLayout,
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue'),
                    meta: {
                        authRequired: false
                    }
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue'),
                    meta: {
                        authRequired: false
                    }
                }
            ]
        }
    ]
})


router.beforeEach((to, from, next) => {

    if (to.meta.authRequired == true) {
        if (!store.getters.isAuthenticated) {
            next({ name: 'login' })
        }
        else {
            next();
        }
    }
    else {
        next();
    }
});


export default router;
