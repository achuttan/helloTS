var Person = (function () {
    function Person(firstName, lastName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    ;
    Person.prototype.greet = function () {
        return this.firstName + " " + this.lastName;
    };
    ;
    return Person;
}());
function greet(user) {
    return "Hello " + user.firstName + " " + user.lastName;
}
function greetUser() {
    var user = new Person("Sachin", "Tendulkar");
    return user.greet();
}
//document.body.innerHTML = greet(user); 
