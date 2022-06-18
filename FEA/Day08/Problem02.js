var x = 2, fns = [];

(function () {
    var x = 5;

    for (var i = 0; i < x; i++) {
        // ..
        fns.push(() => {
            return (this.x * 2)
        })
    }

})();

// Ouput is True on chrome but False in node

// DO NOT MODIFY BELOW CODE
console.log(x * 2 === fns[x * 2]());
 // true