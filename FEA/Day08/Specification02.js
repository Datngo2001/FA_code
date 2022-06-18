class Group {
    #data = []
    static from(arr) {
        return new Group(arr)
    }

    constructor(arr) {
        for (const iterator of arr) {
            this.#data.push(iterator)
        }
    }

    add(item) {
        if (!this.#data.includes(item)) {
            this.#data.push(item)
        }
        return this.#data.length
    }

    delete(item) {
        this.#data = this.#data.filter(d => item != d)
        return this.#data.length
    }

    has(item) {
        return this.#data.includes(item)
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
 // → false