let data = [
    {
        orders: 1
    },
    {
        orders: 1
    },
    {
        orders: 1
    },
]

function convertToNum(num) {
    result = parseFloat(num)
    if (isNaN(num)) {
        return 0;
    }
    return result
}

function addEventBtn() {

    data.forEach((prod, index) => {
        const minusbtn = $(`#prod-${index} > td.quantity-update > div > button.minus-btn`)
        const addbtn = $(`#prod-${index} > td.quantity-update > div > button.add-btn`)
        const deletebtn = $(`#prod-${index} > td.quantity-update > div > button.delete-btn`)

        minusbtn.onclick = minusClickHandle(index)
        addbtn.onclick = addClickHandle(index)
        deletebtn.onclick = delClickHandle(index)
    })
}

function addClickHandle(id) {
    return () => {
        const quantity = $(`#prod-${id} > td.quantity-update > div > div`)
        let val = convertToNum(quantity.innerHTML)
        quantity.innerHTML = val + 1
        updateTax(id)
        updateTotal(id)
        updateTotalPrice(id)
        updateTotalDiscount(id)
        updateTotalTax(id)
    }
}
function minusClickHandle(id) {
    return () => {
        const quantity = $(`#prod-${id} > td.quantity-update > div > div`)
        let val = convertToNum(quantity.innerHTML)
        if (val - 1 <= 1) {
            quantity.innerHTML = 1
        } else {
            quantity.innerHTML = val - 1
        }
        updateTax(id)
        updateTotal(id)
        updateTotalPrice(id)
        updateTotalDiscount(id)
        updateTotalTax(id)
    }
}
function delClickHandle(id) {
    return () => {
        const row = $(`#prod-${id}`)
        updateTax(id)
        updateTotalPrice(id)
        updateTotalDiscount(id)
        updateTotalTax(id)
        row.remove()
    }
}

function updateTax(id) {
    const quantity = $(`#prod-${id} > td.quantity-update > div > div`)
    let Quantity = convertToNum(quantity.innerHTML)
    const price = $(`#prod-${id} > td.price`)
    let Price = convertToNum(price.innerHTML.substring(1, price.innerHTML.length - 1))

    Tax = Quantity * Price * (12.5 / 100)

    const tax = $(`#prod-${id} > td.tax`)
    tax.innerHTML = "$" + Math.round(Tax * 10) / 10
}
function updateTotal(id) {
    const quantity = $(`#prod-${id} > td.quantity-update > div > div`)
    let Quantity = convertToNum(quantity.innerHTML)
    const price = $(`#prod-${id} > td.price`)
    let Price = convertToNum(price.innerHTML.substring(1, price.innerHTML.length - 1))
    const tax = $(`#prod-${id} > td.tax`)
    let Tax = convertToNum(tax.innerHTML.substring(1, tax.innerHTML.length - 1))
    const discount = $(`#prod-${id} > td.discount`)
    let Discount = convertToNum(discount.innerHTML.substring(1, discount.innerHTML.length - 1))
    if (isNaN(Discount)) {
        Discount = 0
    }

    Total = Quantity * Price - Discount + Tax

    const total = $(`#prod-${id} > td.total`)
    total.innerHTML = "$" + Total
}
function updateTotalPrice(id) {

}
function updateTotalDiscount(id) {

}
function updateTotalTax(id) {

}

addEventBtn()