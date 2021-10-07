let number1 = 40;

function change(number1){
    number1 += 100
    console.log(number1)
}

change(number1)
console.log(number1)


let myObject = {
    a: 10,
    b: 15
}

function myChange(myObject){
    myObject.a += 50
    myObject.b += 50
    console.log(myObject)
}

myChange(myObject);
console.log(myObject)