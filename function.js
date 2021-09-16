// function add(){
//     var number1 = 10;
//     var number2 = 20;
//     var result =  number1 + number2;
//     console.log(result)
// }

// add()

// function Parameters and Argument==============

// function add(number1, number2){
//     var result =  number1 + number2;
//     console.log(result)
// }
// add(100, 20)

// function add(number1, number2){
//     return number1 + number2
// }
// let result = add(10, 200)
// console.log(result)


// var isArr = [10, 20, 30, 40]

// var sum = 0
// for(var i = 0; i < isArr.length; i++){
//     sum += isArr[1]
// }
// console.log(sum)


// var isArr1 = [10, 20, 30, 40]
// var isArr2 = [50, 40, 80, 100, 55]
// var isArr3 = [60, 30, 40, 200]

// function sumOfArray(isArr){
//     let sum = 0;
//     for(let i = 0; i < isArr.length; i++){
//         sum += isArr[i]
//     }
//     console.log(sum)
// }

// sumOfArray(isArr1)
// sumOfArray(isArr2)
// sumOfArray(isArr3)


// function test(a, b, c){
//     console.log(JSON.stringify(arguments))
// }
// test()


// // =================================


// function test(a, b, c){
//     console.log(arguments)
// }
// test(10, 20, 30)


// // ==================================



// function limitationless(){
//     for(var i = 0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }
// limitationless(10, 20, 30)
// limitationless(10, 20, 30, 40, 50, 60, 70)


// ===========================================

// function limitationless(){
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     console.log(sum)
// }

// limitationless(10, 20, 30, 40, 50, 60, 70, 80, 90)

// ===========================================

// function limitationless(){
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum;
// }

// let result = limitationless(10, 20, 30, 40, 555, 60, 70, 800, 90)
// console.log(result)

//================================================

function isData(name, address){
    return{
        Name: name,
        Address: address
    }
}
let isDataResult = isData('Nabil Masudh', 'Khulna')
console.log(isDataResult)

// ==================================================