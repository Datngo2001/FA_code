import { apiInstance } from ".";

export function getUsers() {
    return apiInstance.get("/users");
}