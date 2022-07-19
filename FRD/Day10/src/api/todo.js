import api from "./_axios";

export function fetchTodo() {
    return api.get('/todos')
}

export function createTodo(payload) {
    return api.post('/todos', payload)
}

export function removeTodo(id) {
    console.log(id)
    return api.delete(`/todos/${id}`)
}