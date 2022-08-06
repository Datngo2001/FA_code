import { api } from ".";

export function signin({ id }) {
    return api.get(`/users/${id}`);
}