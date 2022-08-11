import api from "./";

export function getAll() {
    return api.get(`/ideas`);
}

export function search(term) {
    return api.get(`/ideas?q=${term}`);
}

export function getId(id) {
    return api.get(`/ideas/${id}`);
}