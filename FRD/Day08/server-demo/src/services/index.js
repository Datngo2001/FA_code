import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com"

const api = axios.create({
    baseURL: BASE_URL
})

const jwt = 'MyToken' + Math.random()
api.interceptors.request.use((config) => {
    // config.headers.authorization = jwt
    return config
}, err => {
    return Promise.reject(err)
})

export default api