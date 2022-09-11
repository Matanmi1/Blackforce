let myName="Uthman";
var pi=3.14;
console.log(pi)

function returnDate(){

    return new Date();
    
    console.log(new Date)
}
const cars = ["Saab", "Volvo", "BMW"];

function toCelsious (fahrenheit){
return ( 5/9 ) * ( fahrenheit - 32 );
}
let result= toCelsious(90)

function getFullName(firstname, lastname){
    return firstname + " " + lastname;
}
let user= { 
    firstName: "Uthman",
    lastName: "Erogbogbo",
    Age: 69,


}
let age =2
// let firstName = "Uthman"

// comsole.log (firstName)

// if (age > 18) {

// text = "Alcohol is bad for your health"
// }

// else {sleep}
// let firstName = "Ola";
// firstName == " Matanmi";


let fullName = getFullName(user.firstName, user.lastName)


document.getElementById("display").innerHTML= "How are you doing"


