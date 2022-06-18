
// ######### Solve 1 ##########
// var nodes = document.getElementsByTagName('button');

// function handleClick(index) {
//     return function () {
//         console.log('You clicked element #' + index);
//     }
// }

// for (var i = 0; i < nodes.length; i++) {
//     nodes[i].addEventListener('click', handleClick(i));
// }


// ######### Solve 2 ##########
var nodes = document.getElementsByTagName('button');

for (let i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function () {
        console.log('You clicked element #' + i);
    });
}