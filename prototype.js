// Object.create============================

// const person = {
//     name: 'Nabil',
//     age: 24,
//     division:'Khulna'
// }

// const personDetails = Object.create(person)

// console.log(personDetails.name)



// Prototype=======================================

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }


// Person.prototype = {
//     eat: function(){
//         console.log(`${this.name} is eating.`)
//     },
// }


// const nabil = new Person('Nabil', 24);
// console.log(nabil)

// const masudh = new  Person('Masudh', 24)
// console.log(masudh)


// Prototype=======================================

Object.prototype.nabil = function(){
    console.log('i am Nabil')
}

var point = {}

point.nabil()
