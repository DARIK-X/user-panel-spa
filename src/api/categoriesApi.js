import {api} from "./api.js";

export const categoriesApi = {
    getList() {
        return api.get('/categories').then(res=> res.data);
    }
}