import {api} from "./api.js";

export const authApi = {
    register(data){
        return api.post(`auth/register`, data).then(res => res.data)
    },
    login(data){
        return api.post(`auth/login`, data).then(res => res.data)
    },
    logout(){
        return api.post(`auth/logout`).then(res => res.data)
    }
}