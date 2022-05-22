let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let notify = document.getElementById("notify")

document.getElementById("add").onclick = createCalCulateHandler("add")
document.getElementById("sub").onclick = createCalCulateHandler("sub")
document.getElementById("mul").onclick = createCalCulateHandler("mul")
document.getElementById("div").onclick = createCalCulateHandler("div")

function createCalCulateHandler(name) {
    return (e) => {
        if (name == "add") {
            notify.innerHTML = convertToNum(num1.value) + convertToNum(num2.value)
        } else if (name == "sub") {
            notify.innerHTML = convertToNum(num1.value) - convertToNum(num2.value)
        } else if (name == "mul") {
            notify.innerHTML = convertToNum(num1.value) * convertToNum(num2.value)
        } else if (name == "div") {
            debugger
            let num2val = convertToNum(num2.value)
            if (num2val == 0) {
                notify.innerHTML = "Devided by 0"
                return
            }
            notify.innerHTML = convertToNum(num1.value) / num2val
        }
    }
}

function convertToNum(num) {
    result = parseFloat(num)
    if (isNaN(num)) {
        return 0;
    }
    return result
}