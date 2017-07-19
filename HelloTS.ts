class Person{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.lastName = lastName;
        this.firstName = firstName;
    };
}

function greet(user: Person){
    return "Hello " + user.firstName + " " + user.lastName;
}

var user = new Person("Ashwin", "Balachandran");
document.body.innerHTML = greet(user);