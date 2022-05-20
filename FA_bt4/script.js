let registerForm = document.getElementById("registerForm")
let fnameInput = document.getElementById("fname")
let lnameInput = document.getElementById("lname")
let emailInput = document.getElementById("email")
let phoneInput = document.getElementById("phone")
let passwordInput = document.getElementById("password")

registerForm.addEventListener("submit", (e) => {
    debugger
    e.preventDefault()
    console.log(fnameInput.value)
    console.log(lnameInput.value)
    console.log(emailInput.value)
    console.log(phoneInput.value)
    console.log(passwordInput.value)
})

