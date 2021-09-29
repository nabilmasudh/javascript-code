//implicit binding
//explicit binding
//new binding
//window binding
// ==================================


//implicit binding====================


// let Person = function(name, age){
//     return{
//         name: name,
//         age: age,
//         printName: function(){
//             console.log(this.name, this.age)
//         }
//     }
// }

// let result = Person('Nabil', 35)

// result.printName()


//explicit binding====================

let printName2 = function(){
    console.log(`${this.name} ${this.age}`)
}

let object = {
    name: 'Nabil',
    age: 24,
}



printName2.call(object)


let printName3 = function () {
  console.log(`${this.name} ${this.age}`);
};

let object = {
  name: "Nabil",
  age: 24,
};

let storeResult = printName2.bind(object);

storeResult()



//window binding=========================


let printName4 = function () {
    console.log(this)
    console.log(window === this);
  console.log(`${this.name} ${this.age}`); //undefined
};

let object = {
  name: "Nabil",
  age: 24,
};

printName4();

