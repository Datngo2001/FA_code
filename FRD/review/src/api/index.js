import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const api = baseApi
export * from "./user"