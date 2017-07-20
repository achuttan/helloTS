class Person{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.lastName = lastName;
        this.firstName = firstName;
    };
    greet(){
        return this.firstName + " " + this.lastName;
    };
}

function greet(user: Person){
    return "Hello " + user.firstName + " " + user.lastName;
}

function greetUser()
{
    var user = new Person("Sachin", "Tendulkar");
    user.greet();
}

//document.body.innerHTML = greet(user);