var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.showInfo = function () {
        console.log("My name is ".concat(this.name, ", i am ").concat(this.age, ". I am in grade ").concat(this.grade));
    };
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.showInfo = function () {
        console.log("My name is ".concat(this.name, ", i am ").concat(this.age, ". I teaches ").concat(this.subject));
    };
    return Teacher;
}());
var student = new Student();
student.age = 22;
student.name = "Dat";
student.grade = 12;
student.showInfo();
var teacher = new Teacher();
teacher.age = 29;
teacher.name = "Tuan";
teacher.subject = "React";
teacher.showInfo();
