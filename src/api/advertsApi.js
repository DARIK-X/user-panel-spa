import {api} from "./api.js";


export const advertsApi = {
    getList(params={}){
        return api.get(`adverts`, params).then(res=>res.data);
    },
    getById(id){
        return api.get(`adverts/${id}`).then(res=>res.data);
    },
    create(data){
        return api.post(`adverts/`, data).then(res=>res.data);
    },
    update(data, id){
        return api.patch(`adverts/${id}`, data).then(res=>res.data)
    },
    delete(id){
        return api.delete(`adverts/${id}`).then(res=>res.data);
    }
}