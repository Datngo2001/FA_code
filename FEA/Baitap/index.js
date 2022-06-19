let data = [
    { id: 1, price: 22.99 },
    { id: 2, price: 10.00 },
    { id: 3, price: 14.00 },
    { id: 4, price: 20.99 },
    { id: 5, price: 50.00 },
    { id: 6, price: 60.00 },
]
let productList = document.querySelector("#products")

productList.innerHTML = ""
data.forEach(product => {
    productList.innerHTML += (renderProduct(product))
});

function renderProduct(product) {
    return (
        `<div id="product-${product.id}" class="card" style="width: 18rem">
          <img src="./asset/placeholder.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Sản phẩm ${product.id}</h4>
            <strong>$${product.price}</strong>
            <p class="card-text">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
            <div class="order">
              <div class="input-group order-input">
                <button id="minus-${product.id}" onclick="minusClick(event)" class="btn order-minus">
                  <i class="bi bi-dash-lg"></i>
                </button>
                <div id="number-${product.id}" class="form-control order-number">0</div>
                <button id="add-${product.id}" onclick="addClick(event)" class="btn order-add">
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
              <button id="addCart-${product.id}" onclick="addCartClick(event)" class="btn btn-primary order-addCart">Thêm</button>
            </div>
          </div>
          <div class="ratting card-body">
            <i class="bi bi-star-fill fa-sm"></i>
            <i class="bi bi-star-fill fa-sm"></i>
            <i class="bi bi-star-fill fa-sm"></i>
            <i class="bi bi-star-fill fa-sm"></i>
            <i class="bi bi-star fa-sm"></i>
          </div>
        </div>`);
}

function addClick(e) {
    let productId = e.currentTarget.id.split("-")[1]
    let orderNumber = document.querySelector(`#number-${productId}`)
    let currentOrder = parseInt(orderNumber.innerHTML)
    orderNumber.innerHTML = currentOrder + 1
}

function minusClick(e) {
    let productId = e.currentTarget.id.split("-")[1]
    let orderNumber = document.querySelector(`#number-${productId}`)
    let currentOrder = parseInt(orderNumber.innerHTML)
    if (currentOrder == 0) {
        return
    }
    orderNumber.innerHTML = currentOrder - 1
}

let notify = document.querySelector("#notify")

function addCartClick(e) {
    let productId = e.currentTarget.id.split("-")[1]
    notify.style.visibility = "visible"
    setTimeout(() => {
        notify.style.visibility = "hidden"
    }, 5000)
}