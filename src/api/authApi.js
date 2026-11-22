import {api} from "./api.js";

export const authApi = {
    regist(data){
        return api.post(`auth/regist`, data).then(res => res.data)
    },
    login(data){
        return api.post(`auth/login`, data).then(res => res.data)
    },
    logout(){
        return api.post(`auth/logout`).then(res => res.data)
    }
}