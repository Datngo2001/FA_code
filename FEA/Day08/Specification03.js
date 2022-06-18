let map = { one: true, two: true, ["hasOwnProperty"]: true };

console.log(map.hasOwnProperty.call('one'));
console.log(map["hasOwnProperty"]);