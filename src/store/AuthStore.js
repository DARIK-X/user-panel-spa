import {defineStore} from "pinia";
import axios from "axios";




export const useAuthStore = defineStore('auth',{
    state: () => ({
        token: localStorage.getItem('token')|| null,
        user: null,
        error: null,
        url: 'https://module-c/api'
    }),
    getters: {
        isAuthenticated: state => !!state.token
    },
    actions: {
        async login(data) {
            try{
                let response = await axios.post(this.url+'/auth/login', data);
                console.log(response);
                console.log(response.data);
                localStorage.setItem('token',response.data.access_token);
                this.token = response.data.access_token;
            }catch(error){
                if(error.response){
                    this.error = error.response.data.error;
                }
            }
        },
        async register(data) {
            try{
                let response = await axios.post(this.url+'/auth/register', data);
                localStorage.setItem('token',response.data.access_token);
                this.token = response.data.access_token;
            }catch(error){
                if(error.response){
                    this.error = error.response.data.error;
                }
            }
        },
        async profile() {
            try{
                let response = await axios.get(this.url+'/user',  {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                })

                this.user = response.data.user;


           }catch(error){
            if(error.response){
                this.error = error.response.data.error;
            }
        }
    },
        async logout() {
            await axios.post(this.url+'/auth/logout', {}, {
                headers: {
                    authorization: 'Bearer ' + this.token
                }
            })
            localStorage.removeItem('token');
            this.token = null;
        }
    }
})