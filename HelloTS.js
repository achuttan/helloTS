var Person = (function () {
    function Person(firstName, lastName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    ;
    return Person;
}());
function greet(user) {
    return "Hello " + user.firstName + " " + user.lastName;
}
var user = new Person("Ashwin", "Balachandran");
document.body.innerHTML = greet(user);
