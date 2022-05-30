// Exercise 01
setTimeout(() => { console.log("Hello Fresher Academy") }, 1000);

// Exercise 02

setInterval(() => { console.log("Hello Fresher Academy") }, 3000);

// Exercise 03
(function () {
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    setTimeout(function () { console.log(3) }, 0);
    console.log(4);
})();

/*
Output:
1
4
3
2

The above declare an anonimous function and call it.
That function call "console.log(1);" then "console.log(4);",
    so that the first two output is 1 and 4.
Because "console.log(2);" and "console.log(3);" is called asynchronously in callback queue,
    so that it come later tham 1 and 4.
Moreover "console.log(2);" is called by setTimeout with 1000 ms delay,
    and "console.log(3);"is called by setTimeout with 0 ms delay,
    so that 3 come before 2 in callback queue.
*/

// Exercise 04
var t1 = setTimeout(function () {
    console.log('A');
    setTimeout(function () {
        console.log('B');
    }, 0);
}, 100);
var t2 = setTimeout(function () {
    console.log('C');
    setTimeout(function () {
        console.log('D');
    }, 0); 
}, 200);
clearTimeout(t1);

setTimeout(function () {
    clearTimeout(t2);
}, 250);