// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype = {
//   eat: function () {
//     console.log(`${this.name} is eating.`);
//   },
// };

// const nabil = new Person("Nabil", 24);
// console.log(nabil);

// const masudh = new Person("Masudh", 24);
// console.log(masudh);


// ================================================






// function Person(name, age){
//   this.name = name;
//   this.age = age;
// }

// function Programar(name, age, type, language){
//   Person.call(this)
  
//   this.name = name;
//   this.age = age;
//   this.type = type;
//   this.language = language;
// }

// Person.prototype = {
//   work: function(){
//     console.log(`${this.name} is working`)
//   },
// };

// Programar.prototype = Object.create(Person.prototype);
// Programar.prototype.constructor = Programar;

// let nabil = new Programar('Nabil', 24, 'Web Developer', 'Javascript')

// console.dir(nabil.language)




// class=====================================================




// class Person{ //parent class
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   sleep(){
//     console.log(`${this.name} is Sleeping`);
//   }
// }

// class Programar extends Person { //sub class
//   constructor(name, age, type, language){
//     super(name, age)
//       this.name = name;
//       this.age = age;
//       this.type = type;
//       this.language = language;
//   }
//   work(){
//     console.log(`${this.name} is working`);
//   }
// }

// let nabil = new Programar("Nabil", 24, "Web Developer", "Javascript");

// let masudh = new Person("Masudh", 24, "Web Developer", "Javascript");

// console.log(nabil.work());

// console.log(masudh.sleep());

// console.log(masudh.work());



// ===================getter and setter====================



// class Person {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   sleep(){
//     console.log(`${this.name} is Sleeping`);
//   }

//   get setName(){
//     //getter
//     return this.name;
//   }

//   set setName(name){
//     this.name = name
//   }

//   static isStatic(nabil, masudh){ //static Method
//     return nabil.age === masudh.age;
//   }
// }

// let nabil = new Person('nabil', 24)
// let masudh = new Person('Masudh', 24)

// // console.log(nabil.setName)

// // nabil.setName = 'Masudh'

// // console.log(nabil.name)

// console.log(Person.isStatic(nabil, masudh));





// ===================Polymorphisom========================


class Person{ //parent class
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  sleep(){
    console.log(`${this.name} is Sleeping`);
  }
}

class Programar extends Person {
  //sub class
  constructor(name, age, type, language) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.type = type;
    this.language = language;
  }
  work() {
    console.log(`${this.name} is working`);
  }
  sleep() {
    console.log(`${this.name} is Sleeping 2:AM`);
  }
}

let nabil = new Programar("Nabil", 24, "Web Developer", "Javascript");

let masudh = new Person("Masudh", 24, "Web Developer", "Javascript");

console.log(nabil.sleep())