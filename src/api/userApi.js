import {api} from "./api.js";
import axios from "axios";

export const userApi = {
    getUser(){
        return axios.get('/user').then(res => res.data);
    },
    updateUser(id, data){
        return axios.patch('/user',data).then(res => res.data);
    },
    getAdvertsUser(){
        return axios.get('/user/adverts').then(res => res.data);
    }
}