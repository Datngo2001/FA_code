var numbers = {
    [Symbol.iterator]: function* () {
        let i = 0
        while (i <= 100) {
            yield i
            i++
        }
    }
};

// should print 0..100 by step 1
// 0 1 2 ... 100
for (let num of numbers) {
    console.log(num);
}

// should print 6..30 by step 4
// 6 10 14 ... 30
console.log("-----------------------------------------")
numbers[Symbol.iterator] = function* () {
    let i = 6
    while (i <= 30) {
        yield i
        i += 4
    }
}
for (let num of numbers) {
    console.log(num);
}