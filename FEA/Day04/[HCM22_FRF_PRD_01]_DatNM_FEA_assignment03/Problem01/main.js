const fs = require('fs');

function getNext(next, success, error) {
    fs.readFile(`./../numfiles/${next}`, 'utf-8', function (err, data) {
        if (err) {
            error(err)
            throw err;
        }

        // get number 
        const start = data.indexOf("[")
        const end = data.indexOf("]")
        const number = data.substring(start + 1, end)
        // get next
        const nextFile = data.split(":")[1].split("[")[0].trim()

        success(number, nextFile)
    });
}
var result = ""
var next = '1024'
for (let i = 0; i < 100; i++) {
    getNext(
        next,
        (number, nextFile) => {
            result += (number + " ")
            next = nextFile
            console.log(number + ":" + next)
        },
        (err) => {
            console.log(err)
        }
    )
}
console.log(result)