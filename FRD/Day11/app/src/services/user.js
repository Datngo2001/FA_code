import apiInstance from "./baseApi";

export function signin({ email, password }) {
    return apiInstance.post("/signin", { email, password })
}

export function register({ email, password }) {
    return apiInstance.post("/register", { email, password })
}