let arr = [
    {
        id: 1,
        name: 'Dung',
        age: 20
    },
    {
        id: 2,
        name: 'Diu',
        age: 20
    },
    {
        id: 3,
        name: 'Ky',
        age: 20
    },
    {
        id: 1,
        name: 'Hai',
        age: 22
    }
]

let result = [];
let set = new Set();

arr.forEach(item => {
    if (set.has(item.id)) {
        return;
    }
    result.push(item)
    set.add(item.id)
});

console.log(result)