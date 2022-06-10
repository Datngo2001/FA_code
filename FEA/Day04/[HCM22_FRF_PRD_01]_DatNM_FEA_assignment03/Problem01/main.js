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

function getNext(nextFile) {
    fs.readFile(`./../numfiles/${nextFile}`, 'utf-8', function (err, data) {
        if (err) {
            console.log(result)
            return
        }

        const [nextFile, number] = getNumber(data)
        result += number

        getNext(nextFile)
    });
}

getNext('1024')