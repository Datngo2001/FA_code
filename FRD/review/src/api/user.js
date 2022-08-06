import api from "./index"

export function login({ id }) {
    return api.get(`/users/${id}`);
}