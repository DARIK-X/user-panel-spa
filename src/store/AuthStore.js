import {defineStore} from "pinia";
import axios from "axios";
import {authApi} from "../api/authApi.js";




export const useAuthStore = defineStore('auth',{
    state: () => ({
        token: localStorage.getItem('token')|| null,
        user: null,
        error: null,
    }),
    getters: {
        isAuthenticated: state => !!state.token
    },
    actions: {
        async login(data) {
            try{
                let response = await authApi.login(data);
                localStorage.setItem('token',response.access_token);
                this.token = response.access_token;
            }catch(error){
                if(error.response){
                    this.error = error.error;
                }
            }
        },
        async register(data) {
            try{
                let response = await authApi.register(data);
                localStorage.setItem('token',response.access_token);
                this.token = response.access_token;
            }catch(error){
                if(error.response){
                    this.error = error.response.data.error;
                }
            }
        },
        async logout() {
            try {
                await authApi.logout();
                localStorage.removeItem('token');
                this.token = null;
            }catch (error){
                console.log(error);
            }
    },
    }
})