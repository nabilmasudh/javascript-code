// It Returns the same result if given the same arguments
// It dose not cause any observable side effect

function square(n){  // It is pure function
    return n*n
}
console.log(square(5))
console.log(square(5))
console.log(square(5))



var number = 10;

function change(){   // It is sideEffect function
    number = 100
}

change()
console.log(number)


var isObject = {
    x : 10,
    y : 20,
}
function isObjectSideEffect(isObject){
    isObject.x = 50
    isObject.y = 80

    console.log(isObject)
}

isObjectSideEffect(isObject)
console.log(isObject)