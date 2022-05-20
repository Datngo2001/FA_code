let addBtns = $('#cart button.add')
let subBtns = $('#cart button.sub')
let inputs = $('#cart input')

function handleAdd(input) {
    return () => {
        let value = parseInt(input.value)
        if (isNaN(value)) {
            value = 0
        }
        input.value = value + 1
    }
}
function handleSub(input) {
    return () => {
        let value = parseInt(input.value)
        if (isNaN(value)) {
            input.value = 0
        } else if (value - 1 < 0) {
            input.value = 0
        } else {
            input.value = value - 1
        }
    }
}

inputs.map((index, input) => {
    addBtns[index].onclick = handleAdd(input)
    subBtns[index].onclick = handleSub(input)
});