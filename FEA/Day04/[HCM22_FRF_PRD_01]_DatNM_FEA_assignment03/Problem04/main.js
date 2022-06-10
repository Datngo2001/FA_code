const fs = require('fs');

var result = ""

function getNumber(str) {
    let result = []
    let currentNum = ""
    for (let i = 0; i < str.length; i++) {
        if ("0" <= str[i] && str[i] <= "9") {
            currentNum += str[i]
        } else if (currentNum.length > 0) {
            result.push(parseInt(currentNum))
            currentNum = ""
        }
    }
    return result
}

function readFile(nextFile) {
    return new Promise((resolve, reject) => {
        fs.readFile(`./../numfiles/${nextFile}`, 'utf-8', function (err, data) {
            if (err) {
                reject(err)
            }
            resolve(data)
        });
    })
}

function* getNext(next) {
    let isContinue = true
    while (isContinue) {
        let data = yield readFile(next).catch(() => { isContinue = false; })
        if (data == undefined) return
        const [nextFile, number] = getNumber(data)
        result += number
        next = nextFile
    }
}

function loadAll() {
    let gen = getNext('1024')
    function _next(data) {
        let yielded = gen.next(data)
        if (!yielded.done) {
            yielded.value.then(data => _next(data))
        } else {
            console.log(result)
        }
    }

    _next()
}

loadAll()