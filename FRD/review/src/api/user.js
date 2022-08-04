import api from "./index"

export function getUsers({ query, }) {
    return api.get("/users");
}