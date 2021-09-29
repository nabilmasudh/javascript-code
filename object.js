// let isObject = {
//     a: 10,
//     b: 20,
//     c: 30,
// }


// isObject.d = 40
// console.log(isObject)

// let isConsObject = Object()
// isConsObject.x = 10
// isConsObject.y = 20
// isConsObject.z = 30
// console.log(isConsObject)

// let isConstObject2 = new Object()
// isConstObject2.p = 10
// isConstObject2.q = 20
// isConstObject2.r = 30
// console.log(isConstObject2)


// let isObjects = {
//     a:10,
//     b:20,
//     c:30,
//     d:40
// }
// // console.log(isObjects.a)
// // console.log(isObjects['a'])

// // let seeYou = 'b'
// // console.log(isObjects[seeYou])


// isObjects.d = 50
// isObjects['e'] = 60

// let props = 'f'
// isObjects[props] = 70

// // console.log(isObjects)

// delete isObjects.a

// console.log(isObjects)

// Iterate Object Properties in javaScript=======

let isObject = {
    a: 10,
    b: 20,
    c: 30
}


// console.log('a' in isObject)


// for(let i in isObject){
//     console.log(i + ': '+ isObject[i])
// }




// Object Methods in javaScript==========

// let isObject = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// // console.log(Object.keys(isObject))
// // console.log(Object.values(isObject))
// // console.log(Object.entries(isObject))

// let isObject2 = Object.assign({}, isObject)

// isObject2.c = 40
// isObject2.b = 50

// console.log(isObject)
// console.log(isObject2)

// const care = {
//     name: 'BMW',
//     model:'80529',
//     weight: '800kg',
//     color:'Black',

//     start: function(){
//         console.log('car has started')
//     },
//     drive: function(){
//         console.log('care is driving')
//     }
// }

// for(let i of care){
//     console.log(care[i])
// }

// let result = care.drive()