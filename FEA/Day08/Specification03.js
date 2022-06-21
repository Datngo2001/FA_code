let map = { one: true, two: true, hasOwnProperty: true };

let obj = {}


console.log(obj.hasOwnProperty.call(map, "hasOwnProperty"));
