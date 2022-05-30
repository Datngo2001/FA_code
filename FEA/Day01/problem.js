let arr = [10, 12]

for (var i = 0; i < arr.length; i++) {
    setTimeout(() => { console.log(arr[i]) }, 0)
}
// undefine
// undefine

for (let i = 0; i < arr.length; i++) {
    setTimeout(() => { console.log(arr[i]) }, 0)
}
// 10
// 12

// doc: hoisting
// keyword: Promises, Async/await

// debound => settimeout, clear set time out