import {api} from "./api.js";


export const advertsApi = {
    getList(params={}){
        return api.get(`api/adverts`, params).then(res=>res.data);
    },
    getById(id){
        return api.get(`api/adverts/${id}`).then(res=>res.data);
    },
    create(data){
        return api.post(`api/adverts/`, data).then(res=>res.data);
    },
    update(data, id){
        return api.put(`api/adverts/${id}`, data).then(res=>res.data)
    },
    delete(id){
        return api.delete(`api/adverts/${id}`).then(res=>res.data);
    }
}