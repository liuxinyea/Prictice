function greeter(person :Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

interface Person{
    firstName:string;
    lastName:string;
}

class Student{
    fullName:string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

let person=new Student("liu","xin","ye");

document.body.innerHTML=greeter(person);