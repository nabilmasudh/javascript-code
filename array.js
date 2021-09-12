// var isArray = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]

// var find  = 10
// var isFound = false;

// for(var i = 0; i < isArray.length; i++){
//     if(isArray[i] === find){
//         console.log('Data Found Here');
//         isFound = true;
//         break;
//     }
// }

// if(!isFound){
//     console.log('Data Not Found Here')
// }

// reverse Array ===========================

// let isArray = [1, 2, 3, 3, 4, 5, 6, 7, 8]

// for(let i = 0; i < (isArray.length / 2); i++){
//     let tempArray = isArray[i]
//     isArray[i] = isArray[isArray.length - 1 - i]
//     isArray[isArray.length - 1 - i] = tempArray;
    
// }
// for(let x = 0; x <isArray.length; x++){
//     console.log(isArray[x])
// }


// let muliArray = [
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//     ],
//     [
//         [5, 6, 7, 8],
//         [9, 6, 3, 5],
//     ],
// ]

// for(let i = 0; i < muliArray.length; i++){
//     for(let j = 0; j < muliArray[i].length; j++){
//         for(let k = 0; k < muliArray[i][j].length; k++){
//             console.log('First Element ' + i + ': '+ 'Second Element ' + j + ': ' + muliArray[i][j][k])
//         }
//     }
// }

// Array methods ==================================

// let isArray = [1, 2, 3, 4, 5]
// let isArray2 = [6, 7, 8, 9, 1]

// // console.log(isArray.join('/ '))
// // console.log(isArray.fill(4))

// // let isArray3 = isArray.concat(isArray2)
// // console.log(isArray3)

// let array = Array.from(isArray)
// array[2] = 30

// console.log(isArray)
// console.log(array)

