import {api} from "./api.js";

export const userApi = {
    getUser(){
        return api.get('/user').then(res => res.data);
    },
    updateUser(id, data){
        return api.patch('/user',data).then(res => res.data);
    },
    getAdvertsUser(){
        return api.get('/user/adverts').then(res => res.data);
    }
}