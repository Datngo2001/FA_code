let registerForm = document.getElementById("registerForm")
let fnameInput = document.getElementById("fname")
let lnameInput = document.getElementById("lname")
let emailInput = document.getElementById("email")
let usernameInput = document.getElementById("username")
let passwordInput = document.getElementById("password")
let confirmInput = document.getElementById("confirm")
let userTable = document.querySelector("#userTable")
let userTableBody = document.querySelector("#userTable tbody")

registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(fnameInput.value)
    console.log(lnameInput.value)
    console.log(emailInput.value)
    console.log(usernameInput.value)
    console.log(passwordInput.value)
    console.log(confirmInput.value)

    let newRow = createRow(fnameInput.value, lnameInput.value, emailInput.value, usernameInput.value)
    userTableBody.appendChild(newRow);
})

function createRow(fname, lname, email, username) {
    let result;

    let th = document.createElement("th")
    th.scope = "row"
    th.innerHTML = userTable.rows.length
    let td_fname = document.createElement("td")
    td_fname.innerHTML = fname
    let td_lname = document.createElement("td")
    td_lname.innerHTML = lname
    let td_email = document.createElement("td")
    td_email.innerHTML = email
    let td_username = document.createElement("td")
    td_username.innerHTML = username

    result = document.createElement("tr")
    result.appendChild(th)
    result.appendChild(td_fname)
    result.appendChild(td_lname)
    result.appendChild(td_email)
    result.appendChild(td_username)

    return result;
}