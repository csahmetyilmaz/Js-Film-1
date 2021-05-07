// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
//
// Employee.prototype.showInfos=function (){
//     console.log("Isim: " + this.name + "Yas :" + this.age + "Maas: " + this.salary)
// }
// const emp=new Employee("Ahmet",33,1500);
// console.log(emp);

// class Employee {
//     constructor(name, age, salary) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//
//     showInfos() {
//         console.log("Isim: " + this.name + "Yas :" + this.age + "Maas: " + this.salary)
//
//     }
// }
// const emp = new Employee("Ahmet",33,2900);
// // console.log(emp);
// emp.showInfos();

//Statik metotlar
// class Matematik {
//     static cube(x) {
//         console.log(x * x * x);
//     }
// }
//
// const math = new Matematik();
// Matematik.cube(4);
// // console.log(math);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("Isim: " + this.name + " Age: " + this.age);
    }
}

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    showInfos() {
        console.log("Isim: " + this.name + " Age: " + this.age + " Maas : " + this.salary);
    }
    raiseSalary(amount){
        this.salary +=amount;
    }
}

const emp = new Employee("Ahmet",3,3900);
console.log(emp);
emp.showInfos();
emp.raiseSalary(500);
emp.showInfos();