let inputForm = document.getElementById("inputForm")
let todoList = document.getElementById("todoList")
let jobIndex = 1;

inputForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let jobInput = e.currentTarget[0];
    let todoItem = createTodo(jobInput.value)
    todoList.appendChild(todoItem)
    jobInput.value = ""
})

function createTodo(job) {
    let result;

    result = document.createElement("div")
    result.className = "border-top rounded p-3 my-3"
    result.innerHTML = jobIndex + ". " + job
    result.id = "todo-" + jobIndex

    btnDelete = document.createElement("button")
    btnDelete.className = "btn btn-danger float-end"
    deleteIcon = document.createElement("i")
    deleteIcon.className = "bi bi-x-lg"
    btnDelete.appendChild(deleteIcon)
    btnDelete.onclick = deleteTodo(result.id)

    result.appendChild(btnDelete)

    jobIndex++;

    return result;
}

function deleteTodo(id) {
    return () => {
        let divElement = document.getElementById(id)
        divElement.remove()
    }
}