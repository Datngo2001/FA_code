function* chinhPhuong(max) {
    let i = 1
    let result = i * i
    while (result < max) {
        yield result
        i++
        result = i * i
    }
}

let chinhPhuongGen = chinhPhuong(40)

function* finbonacy(max) {
    let a = 0
    let b = 1

    yield a
    yield b

    let result = a + b
    while (result < max) {
        yield result
        a = b
        b = result
        result = a + b
    }
}

let finbonacyGen = finbonacy(40)

for (let num of finbonacy(400)) {
    console.log(num)
}

