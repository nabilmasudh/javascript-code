// rum this function brawser

// function a(){
//     var x = 5;
//     return function(){
//         console.log(x)
//     }
// }

// var result = a()
// console.dir(result)


// the closure is when a function is able to remember and  access its lexical scope even when that function execution outside its lexical scope

// ক্লোজার হল যখন একটি ফাংশন তার লেক্সিকাল স্কোপকে মনে রাখতে এবং অ্যাক্সেস করতে সক্ষম হয় এমনকি যখন ফাংশনটি তার লেক্সিকাল স্কোপের বাইরে কার্যকর হয়

//able to remember and  access its lexical scope

//hen that function execution outside its lexical scop

function calculation(){
    var message ="";

      return function () {
          console.log(message)
      }
}
var sayMessage = calculation()
sayMessage();