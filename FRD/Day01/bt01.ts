interface Person {
    name: string
    age: number
    showInfo(): void;
}

class Student implements Person {
    name: string;
    age: number;
    grade: number;

    showInfo(): void {
        console.log(`My name is ${this.name}, i am ${this.age}. I am in grade ${this.grade}`)
    }
}

class Teacher implements Person {
    name: string;
    age: number;
    subject: string;

    showInfo(): void {
        console.log(`My name is ${this.name}, i am ${this.age}. I teaches ${this.subject}`)
    }
}

let student = new Student()
student.age = 22
student.name = "Dat"
student.grade = 12
student.showInfo()

let teacher = new Teacher()
teacher.age = 29
teacher.name = "Tuan"
teacher.subject = "React"
teacher.showInfo()