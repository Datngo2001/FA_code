let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")

function createCalCulateHandler(name) {
    return (e) => {
        if (name == "add") {
            return num1 + num2
        } else if (name == "sub") {
            return num1 - num2
        } else if (name == "mul") {
            return num1 * num2
        } else if (name == "div") {
            return num1 / num2
        }

    }
}