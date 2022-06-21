function upper(strings, ...values) {
    let result = ""
    for (let i = 0; i < strings.length; i++) {
        result += strings[i]
        if (i >= values.length) {
            continue
        }
        result += values[i].toUpperCase()
    }
    console.log(result)
    return result
}

var name = 'Nguyen Van A',
    account = 'ANV',
    classname = 'Fresher FrontEnd';

console.log(
    upper`Hello ${name} (@${account}), welcome to the ${classname}!!!` ===
    'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!'
);