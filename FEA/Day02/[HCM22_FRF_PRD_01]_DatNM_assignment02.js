// Problem 1:
// 1.1:
function getData(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText)
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
getData("https://jsonplaceholder.typicode.com/users", (res) => {
    let data = JSON.parse(res)
    data.forEach(u => {
        getData("https://jsonplaceholder.typicode.com/users", (posts) => {
            
        })
    });
})
// 1.2: