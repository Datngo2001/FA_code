let map = { one: true, two: true, hasOwnProperty: true };

let obj = {
    has: (prop) => {
        console.log(this)
        console.log(prop)
        return this.hasOwnProperty(prop)
    }
}

console.log(obj.has.call(map, "one"));
