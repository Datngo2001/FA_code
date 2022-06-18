// obj = {
//     [Symbol.for("name")]: "1",
//     age: "2",
//     major: "3"
// }

// obj[Symbol.iterator] = function* () {
//     let keys = Object.keys(this)
//     for (let i = 0; i < keys.length; i++) {
//         yield this[keys[i]]
//     }
// }

// for (let v of obj) {
//     console.log("Value: ", v)
// }

// console.log(obj[Symbol.for("name")])

var scoreMap = new Map();

var student1 = { name: "Dat", grade: 1 }
var student2 = { name: "Hung", grade: 2 }
var student3 = { name: "Ky", grade: 3 }

scoreMap.set(student1, 10)
scoreMap.set(student2, 9)
scoreMap.set(student3, 8)

scoreMap.forEach(v => {
    console.log(v)
})

console.log(scoreMap.get(student1))