class Person {
    name;
    age;
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }

    introduce() {
        console.log(`My name is ${this.name}, I'm ${this.age}`)
    }
}

class Student extends Person {
    grade;
    constructor(_name, _age, _grade) {
        super(_name, _age)
        this.grade = _grade
    }

    introduce() {
        console.log(`I'm a student, I'm in ${this.grade}`)
    }

    study() {
        console.log(`I'm studying`)
    }
}

class Teacher extends Person {
    subject;
    constructor(_name, _age, _subject) {
        super(_name, _age)
        this.subject = _subject
    }

    introduce() {
        console.log(`I'm a teacher, I teach ${this.subject}`)
    }

    teach() {
        console.log(`I'm teaching ${this.subject}`)
    }
}
let person = new Person("Dat", 22)
let student = new Student("Dat", 22, 12)
let teacher = new Teacher("Dat", 22, "JS")

let arr = [0, 2, 3, 4, 5, 1, 7, 1, 9, 10, 1]
function min(...rest) {
    return rest.reduce((acc, item) => {
        if (acc > item) {
            return item
        }
        return acc
    })
}
console.log(min(...arr))

let myArr = [
    {
        name: "Nam",
        posts: [
            {
                postId: 1,
                title: "Master Cat "
            },
            {
                postId: 2,
                title: "Master Cat "
            },
            {
                postId: 3,
                title: "Master Cat "
            }
        ]
    }
]

const [{ posts: [, { postId: res }] }] = myArr
console.log(res)