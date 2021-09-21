var persons = [
    {
        name: "A",
        age: 19,
    },
    {
        name: "B",
        age: 17,
    },
    {
        name: "C",
        age: 30,
    },
    {
        name: "D",
        age: 15,
    },
    {
        name: "E",
        age: 23,
    },
    {
        name: 'F',
        age: 24
    },
    {
        name: 'G',
        age: 20,
    }
];

persons.sort(function(value1, value2){
    if(value1.age > value2.age){
        return -1
    } else if(value1.age < value2.age){
        return 1
    } else{
        return 0
    }
})
// console.log(persons)

var isArrays = [4, 5, 3, 1, -4, 2, 6, -7, 8, 7, 9, -1]

isArrays.sort(function (value1, value2) {
  if (value1 > value2) {
    return 1;
  } else if (value1 < value2) {
    return -1;
  } else {
    return 0;
  }
});
// console.log(isArrays);

var result1 = isArrays.some(function(value){
  //checks whether an element is odd
  return value % 2 === 1;
})
// console.log(result1)

var result2 = isArrays.some(function (value) {
  //checks whether an element is even
  return value % 2 === 0;
});
// console.log(result2);

var result3 = isArrays.every(function(value){
  //True if the total array is all odd numbers
  return value % 2 === 1;
})
// console.log(result3)


var result4 = isArrays.every(function(value){
  //True if the total array is all even numbers
  return value % 2 === 0;
})
// console.log(result4)

var isArrays = [4, 2, 6, 8];

var result5 = isArrays.every(function (value) {
  //True if the total array is all even numbers
  return value % 2 === 0;
});
console.log(result5);

var result6 = isArrays.every(function(value){
  //If the value is greater than 0, then the condition is true
  return value > 0;
})
console.log(result6)

var result7 = isArrays.every(function (value) {
  //If the value is smaller than 0, then the condition is true
  return value < 0;
});
console.log(result7);

