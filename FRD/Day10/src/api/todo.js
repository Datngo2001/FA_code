import api from "./baseapi"

export function fetchTodo() {
    return api.get('/todos')
}

export function createTodo(payload) {
    return api.post('/todos', payload)
}

export function removeTodo(id) {
    return api.delete(`/todos/${id}`)
}

export function updateTodo(payload) {
    return api.put(`/todos/${payload.id}`, payload)
}