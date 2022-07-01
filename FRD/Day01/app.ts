class Stack<T>{
    private data: T[]
    constructor() {
        this.data = []
    }
    push(item: T) {
        this.data.push(item)
    }
    pop(): T | undefined {
        return this.data.pop()
    }
}

let stringStack = new Stack<string>()
stringStack.push('1')
stringStack.push('10')


let numStack = new Stack<number>()
numStack.push(1)
numStack.push(10)