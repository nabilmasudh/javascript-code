// 1. a function can be stored in a variable

function add(number1, number2){
    return number1 + number2;
}

var result = add
console.log(result(4,5))



// 2. function can be stored in a array 

function multi(number1, number2){
    return number1 * number2;
}

var isArrayIn = []
isArrayIn.push(multi)

console.log(isArrayIn)
console.log(isArrayIn[0](10, 40))


// 3. a function can be stored in object 

function isAddition(numbers1, numbers2){
    return numbers1 + numbers2;
}

var isObject = {
    property: isAddition,
}

console.log(isObject)
console.log(isObject.property(10, 20))

// 4. a can create function as need

setTimeout(function(){
    console.log('I have create...1')
}, 1000)

setTimeout(()=>{
    console.log('I have create........2')
}, 3000)