// Q1
// var itemsArray = [
//     { name: "juice", price: 50, quantity: 3 },
//     { name: "cookie", price: 30, quantity: 9 },
//     { name: "shirt", price: 880, quantity: 1 },
//     { name: "pen", price: 100, quantity: 2 }];

// var juiceCost = itemsArray[0].price * itemsArray[0].quantity
// var cookieCost = itemsArray[1].price * itemsArray[1].quantity
// var shirtCost = itemsArray[2].price * itemsArray[2].quantity
// var penCost = itemsArray[3].price * itemsArray[3].quantity

// console.log(juiceCost);
// console.log(cookieCost);
// console.log(shirtCost);
// console.log(penCost);

// Q2

// var newObject = {
//     name: "mohsin",
//     email: "mohsinshahzad092@gmail.com",
//     password: "abcd123",
//     age: 33,
//     gender: "male",
//     city: "karachi",
//     country: "pakistan"
// }

// console.log("age" in newObject);
// console.log("country" in newObject);
// console.log("firstName" in newObject);
// console.log("lastName" in newObject);


// Q3

// function Record(name,id,age,city,country){
//     this.name = name;
//     this.id = id;
//     this.age = age;
//     this.city = city;
//     this.country = country;
// }
// var record1 = new Record('mohsin',1945,33,'Karachi','Pakistan');
// var record2 = new Record('danish',1845,15,'Karachi','Pakistan');
// var record3 = new Record('waseem',1645,44,'Karachi','Pakistan');

// console.log (record1);
// console.log (record2);
// console.log (record3);

// Q4

var btn = document.getElementsByTagName('button');
var fname = document.getElementById('fname');
var gender = document.getElementById('gender');
var address = document.getElementById('address');
var profession = document.getElementById('profession');
var education = document.getElementById('education');


function submission() {

    function Population(name, gender, address, education, profession) {
        this.myname = name;
        this.mygender = gender;
        this.myaddress = address;
        this.myeducation = education;
        this.myprofession = profession;
    }

    if (education.children[0].checked) {
        educationValue = "matric";
    } else if (education.children[3].checked) {
        educationValue = "inter";
    } else if (education.children[6].checked) {
        educationValue = "graduation";
    }

    if (profession.children[0].checked) {
        professionValue = "student";
    } else if (profession.children[3].checked) {
        professionValue = "business";
    } else if (profession.children[6].checked) {
        professionValue = "job";
    }

    var population1 = new Population(fname.value, gender.value, address.value, educationValue, professionValue)
    console.log(population1);
    console.log(fname.value, gender.value, address.value, professionValue, educationValue)
}


