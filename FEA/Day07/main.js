class Animal {
    name

    constructor(name) {
        this.name = name
    }

    speak() {
        console.log("Animal speak...")
    }

    move() {
        console.log("Animal move...")
    }
}

const myAnimal = new Animal()
myAnimal.speak()
myAnimal.move()