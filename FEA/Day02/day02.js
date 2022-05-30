function getName() {
    return new Promise((resolve, reject) => {
        let isSuccess = Math.random();
        if (isSuccess > 0.5) {
            setTimeout(() => {
                resolve("Dat")
            }, 2000)
        } else {
            return reject(new Error("Get Name Error"))
        }
    })
}

function getID() {
    return new Promise((resolve, reject) => {
        let isSuccess = Math.random();
        if (isSuccess > 0.5) {
            setTimeout(() => {
                resolve("1")
            }, 2000)
        } else {
            return reject(new Error("Get ID Error"))
        }
    })
}

getName()
    .then((name) => {
        console.log(name)
        return getID()
    })
    .then((id) => {
        console.log(id)
    })
    .catch((err) => {
        console.log(err)
    })

// Use ajax

function loadUser() {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            resolve(this.responseText);
        }
        xhttp.open("GET", "ajax_info.txt", true);
        xhttp.send();
    })
}