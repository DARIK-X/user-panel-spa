import {createRouter, createWebHistory} from 'vue-router';
import {useAuthStore} from "../store/AuthStore.js";


import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProfileView from "../views/ProfileView.vue";
import MyAdvertView from "../views/MyAdvertView.vue";
import AdvertDetail from "../views/AdvertDetail.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: {guest: true},
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
        meta: {guest: true},
    },{
        path: '/profile',
        name: 'profile',
        component: ProfileView,
        meta: {isAuth: true},
    },{
        path: '/adverts/:id',
        name: 'advert detail page',
        component: AdvertDetail ,
        meta: {isAuth: true},
    },
    {
        path: '/user/adverts',
        name: 'user detail page',
        component: MyAdvertView,
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