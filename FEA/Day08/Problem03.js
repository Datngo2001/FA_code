function foo(...arr) {
    return arr.filter(item => (item != 4 && item != 6))
}

function bar() {
    var a1 = [2, 4];
    var a2 = [6, 8, 10, 12];

    return foo(...[...a1, ...a2]);

}

console.log(bar().join(''))
// DO NOT MODIFY BELOW CODE
console.log(bar().join('') === '281012');
// true