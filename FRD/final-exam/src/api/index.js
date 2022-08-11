import axios from "axios";
import Cookies from 'universal-cookie';

const API_ENDPOINT = "http://localhost:3003/api";
const cookies = new Cookies();

function getToken() {
    const token = cookies.get("token");

    return token ? `Bearer ${token}` : null;
}

const api = axios.create({
    baseURL: API_ENDPOINT,
});

api.interceptors.request.use(
    function (config) {
        config.headers.authorization = getToken();
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
export default api;
