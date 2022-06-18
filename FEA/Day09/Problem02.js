let computed = new Map()

function fibonaci(n) {
    if (n <= 1) {
        return 1;
    }

    if (!computed.has(n)) {
        let nextValue = fibonaci(n - 2) + fibonaci(n - 1)
        computed.set(n, nextValue)
    }

    return computed.get(n);
}
fibonaci(10)
console.log(computed.get(10))