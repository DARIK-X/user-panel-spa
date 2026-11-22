import {createRouter, createWebHistory} from 'vue-router';
import {useAuthStore} from "../store/AuthStore.js";


const routes = [
    {
        path: '/',
        name: 'home',
        component: import("../views/HomeView.vue"),
    },
    {
        path: '/login',
        name: 'login',
        component: import("../views/LoginView.vue"),
        meta: {guest: true},
    },
    {
        path: '/register',
        name: 'register',
        component: import("../views/RegisterView.vue"),
        meta: {guest: true},
    },{
        path: '/profile',
        name: 'profile',
        component: import("../views/ProfileView.vue"),
        meta: {isAuth: true},
    },{
        path: '/adverts/:id',
        name: 'advert detail page',
        component: import("../views/AdvertDetail.vue") ,
        meta: {isAuth: true},
    },
    {
        path: '/user/adverts',
        name: 'user detail page',
        component: import("../views/MyAdvertView.vue"),
        meta: {isAuth: true},
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if(to.meta.isAuth && !authStore.isAuthenticated) {
        next('/login');
    }else if(to.meta.guest &&  authStore.isAuthenticated){
        next('/profile');
    }else {
        next()
    }
})

export default router;