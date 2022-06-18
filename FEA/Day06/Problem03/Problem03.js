let str = "12345"

function convert(input) {
    if (typeof input != "string") {
        return ""
    }

    let words = input.split("_")
    words = words.map(word => {
        let chars = word.split("")
        chars[0] = chars[0].toUpperCase()
        return chars.join("")
    })

    return words.join("");
}

console.log(convert("user_name_asdas"))