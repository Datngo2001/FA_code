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
        const minusbtn = document.querySelector(`#prod-${index} > td.quantity-update > div > button.minus-btn`)
        const addbtn = document.querySelector(`#prod-${index} > td.quantity-update > div > button.add-btn`)
        const deletebtn = document.querySelector(`#prod-${index} > td.quantity-update > div > button.delete-btn`)

        minusbtn.onclick = minusClickHandle(index)
        addbtn.onclick = addClickHandle(index)
        deletebtn.onclick = delClickHandle(index)
    })
}

function addClickHandle(id) {
    return () => {
        const quantity = document.querySelector(`#prod-${id} > td.quantity-update > div > div`)
        let val = convertToNum(quantity.innerHTML)
        quantity.innerHTML = val + 1
        updateTax(id)
        updateTotal(id)
        updateTotalPrice()
        updateTotalDiscount(id)
        updateTotalTax(id)
    }
}
function minusClickHandle(id) {
    return () => {
        const quantity = document.querySelector(`#prod-${id} > td.quantity-update > div > div`)
        let val = convertToNum(quantity.innerHTML)
        if (val - 1 <= 1) {
            quantity.innerHTML = 1
        } else {
            quantity.innerHTML = val - 1
        }
        updateTax(id)
        updateTotal(id)
        updateTotalPrice()
        updateTotalDiscount(id)
        updateTotalTax(id)
    }
}
function delClickHandle(id) {
    return () => {
        const row = document.querySelector(`#prod-${id}`)
        updateTax(id)
        updateTotalPrice()
        updateTotalDiscount(id)
        updateTotalTax(id)
        row.remove()
    }
}

function updateTax(id) {
    const quantity = document.querySelector(`#prod-${id} > td.quantity-update > div > div`)
    let Quantity = convertToNum(quantity.innerHTML)
    const price = document.querySelector(`#prod-${id} > td.price`)
    let Price = convertToNum(price.innerHTML.substring(1, price.innerHTML.length - 1))

    Tax = Quantity * Price * (12.5 / 100)

    const tax = document.querySelector(`#prod-${id} > td.tax`)
    tax.innerHTML = "$" + Math.round(Tax * 10) / 10
}
function updateTotal(id) {
    const quantity = document.querySelector(`#prod-${id} > td.quantity-update > div > div`)
    let Quantity = convertToNum(quantity.innerHTML)
    const price = document.querySelector(`#prod-${id} > td.price`)
    let Price = convertToNum(price.innerHTML.substring(1, price.innerHTML.length - 1))
    const tax = document.querySelector(`#prod-${id} > td.tax`)
    let Tax = convertToNum(tax.innerHTML.substring(1, tax.innerHTML.length - 1))
    const discount = document.querySelector(`#prod-${id} > td.discount`)
    let Discount = convertToNum(discount.innerHTML.substring(1, discount.innerHTML.length - 1))
    if (isNaN(Discount)) {
        Discount = 0
    }

    Total = Quantity * Price - Discount + Tax

    const total = document.querySelector(`#prod-${id} > td.total`)
    total.innerHTML = "$" + Total
}
function updateTotalPrice() {
    let TotalPrice = 0;

    data.forEach((prod, index) => {
        const price = document.querySelector(`#prod-${index} > td.price`)
        let Price = convertToNum(price.innerHTML.substring(1, price.innerHTML.length - 1))

        TotalPrice += Price
    })

    const totalPrice = document.querySelector("#order-table > tbody > tr:nth-child(4) > td.total-price")
    totalPrice.innerHTML = "$" + TotalPrice
}
function updateTotalDiscount(id) {

}
function updateTotalTax(id) {

}

addEventBtn()