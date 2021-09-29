function Person(name){
    console.log(this)
    this.name = name
}
var tempPerson = new Person('Nabil')
console.log(tempPerson)



console.log(this)
let Persons = (name) =>{
    console.log(this)
    return name
}

console.log(Persons('Nabil'));
