function mul(a, b) {
    const result = []
    const multer = Number(b)
    const numbers = a.toString().split("").reverse()

    let remember = 0
    numbers.forEach((num, i) => {
        const temp = (num * multer).toString().split("").reverse()

        debugger
        for (let j = 0; j < temp.length; j++) {
            if (!result[i + j]) {
                result[i + j] = "0"
            };

            const subResult = Number.parseInt(result[i + j]) + Number.parseInt(remember) + Number.parseInt(temp[j]);
            if (subResult >= 10) {
                [remember, result[i + j]] = subResult.toString().split("");
            } else {
                remember = 0
                result[i + j] = subResult
            }
        }
    })

    if (remember != 0) {
        result.push(remember)
    }

    return result.reverse().join("")
}

console.log(mul(123456789101112, 89))