import axios from 'axios';


export const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    headers: {
        "Accept": 'application/json',
    },
})

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers.Authorization = 'Bearer '+token;
    }

    return config;
    },
    (err) => Promise.reject(err)
);

api.interceptors.response.use(
    (response)=>{
        return response;
    },
    (err)=>{
        const data = err.response?.data;
        const status = err.response?.status;

        if(err.response?.status === 401){
            localStorage.removeItem("token");
        }


        const normalizedError = {
            status: status || 0,
            message: data?.message|| err.message || "Ошибка сети",
            validationErrors: data?.errors || null,
            raw: err
        }

        return Promise.reject(normalizedError);
    }
)


