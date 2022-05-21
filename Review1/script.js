var itemList = [];

fetch('/data.json', {
    method: 'GET'
})
    .then(response => response.json())
    .then(data => {
        itemList = Array.from(data);
        renderItems();
    });

function renderItems() {
    // itemList is NullOrEmpty or not?
    if (itemList.length > 0) { }
    if (!!itemList?.length) { }
    // variable? => check null
    // ! => not
    // !itemList?.length => array is empty
    // !!itemList?.length => !(array is empty) => array is not empty

    let tRows = itemList.map((item, index) => {
        let tr = document.createElement('tr');

        let tNo = document.createElement('td');
        tNo.innerHTML = index + 1;

        let tName = document.createElement('td');
        tName.innerHTML = item.name;

        let tPrice = document.createElement('td');
        tPrice.innerHTML = item.price;

        let tOrder = document.createElement('td');
        tOrder.id = "order-" + index;
        tOrder.append(createOrder(index, item));

        tr.append(tNo, tName, tPrice, tOrder);
        return tr;
    });

    let tBody = document.getElementById('tbody');
    tBody.innerHTML = '';
    tRows.forEach(r => {
        tBody.append(r);
    });

    //renderTotal();

}

function createOrder(index, item) {
    let div = document.createElement('div');

    let subBtn = document.createElement('button');
    subBtn.innerHTML = "-";
    subBtn.style = "display: inline-block; width: 33.33%;"

    let addBtn = document.createElement('button');
    addBtn.innerHTML = "+";
    addBtn.style = "display: inline-block; width: 33.33%;"

    let orderView = document.createElement('div');
    orderView.style = "display: inline-block; width: 33.33%;"

    div.append(subBtn, orderView, addBtn)

    return div
}

function reanderBill() {

}

function renderTotal() {

}