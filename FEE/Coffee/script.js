var itemList = [];

//lấy data
fetch('/data.json', {
    method: 'GET'
}).then(response => response.json())
    .then(data => {
        itemList = Array.from(data);
        renderItems();
    }) // [...] => deepcopy

function renderItems() {
    let tbody = document.getElementById("tbody")

    let rows = itemList.map((item, index) => {
        let rowId = "item-" + index;

        //tạo dòng
        let tr = document.createElement('tr');
        tr.id = rowId;

        // tạo ô 
        let tNo = document.createElement('td');
        tNo.innerHTML = index + 1;

        // tạo ô
        let tName = document.createElement('td');
        tName.innerHTML = item.name;

        // tạo ô 
        let tPrice = document.createElement('td');
        tPrice.innerHTML = item.price;

        let tOrder = createOrderDiv(index, item);

        tr.append(tNo, tName, tPrice, tOrder);
        return tr;
    })

    tbody.innerHTML = '';
    rows.forEach(r => {
        tbody.append(r);
    });

    renderTotal()
}

function createOrderDiv(id, item) {
    // tao the div 
    let div = document.createElement('div');

    // tao cac nut
    let btnMinus = document.createElement('button');
    let btnPlus = document.createElement('button');
    let orderView = document.createElement('div');

    // tao noi dung
    btnMinus.innerHTML = "-"
    btnPlus.innerHTML = "+"
    orderView.innerHTML = item.Order

    // dinh dang
    btnMinus.style = "display: inline-block; width: 30%;"
    btnPlus.style = "display: inline-block; width: 33.33%;"
    orderView.style = "display: inline-block; width: 30%; text-align: center;"

    // them su kien
    btnPlus.onclick = () => addOrder(id)
    btnMinus.onclick = () => reduceOrder(id)

    // ket hop cac thanh phan
    div.append(btnMinus, orderView, btnPlus)
    return div;
}

function addOrder(id) {
    let value = parseInt(id);
    itemList[value].Order += 1;
    renderItems();
}

function reduceOrder(id) {
    let value = parseInt(id);
    itemList[value].Order = (itemList[value].Order -= 1) < 0
        ? 0
        : itemList[value].Order;

    renderItems();
}

function renderTotal() {
    let list = itemList.filter(r => r.Order !== 0);

    let totalPrice = 0;
    let pList = list.map(item => {
        totalPrice += (item.Order * item.price)

        let p = document.createElement('p');

        let spanName = document.createElement('span');
        spanName.innerHTML = item.name + ':';

        let spanOrder = document.createElement('span');
        spanOrder.innerHTML = item.Order;

        p.append(spanName, spanOrder);
        return p;
    });

    let divTotal = document.getElementById('total');
    divTotal.innerHTML = '';
    pList.forEach(p => divTotal.append(p));

    let spanOrder = document.createElement('span');
    spanOrder.innerHTML = "Total: " + totalPrice;

    divTotal.append(spanOrder)
}