
let myArray = [1, 2, 3]
const mySet = new Set(myArray);


mySet.add(5)
mySet.add(6)
mySet.add(7).add(8).add(9).add(4)
mySet.add('Bangladesh')
mySet.delete(5)
console.log(mySet.has(5));
console.log(mySet.has(6));
console.log(mySet);
console.log(mySet.size)

const mySet2 = new Set("Bangladesh");
console.log(mySet2);
for(let value of mySet2){
    console.log(value)
}

let myArray2 = [1, 2, 3, 4]

let mySet3 = new Set(myArray2)
mySet3.add({
    a: 1,
    b: 2
})
mySet3.add({
    a: 1,
    b: 2
})

console.log([...mySet3])
console.log(Array.from(mySet3))

let myArray3 = [1, 2, 7, 3, 4, 5, 2, 4, 5, 1, 8, 9, 8]

console.log([...new Set(myArray3)]);

let mySet4 = new Set([2, 1, 3, 4])
let mySet5 = new Set([1, 2, 5, 8, 7])


let unione = new Set([...mySet4, ...mySet5])

console.log(unione);


let intersection = new Set([...mySet4].filter((x) => mySet5.has(x)));

console.log(intersection)


let defference = new Set([...mySet4].filter((x) => !mySet5.has(x)));

console.log(defference)


// WeakSet==========================

const myWeakset = new WeakSet([{x: 3}, {y: 4}])

myWeakset.add({a: 1, b: 2})

console.log(myWeakset)

const myWeakset2 = new WeakSet()

class SomeClass {
    constructor(){
        myWeakset2.add(this)
    }
    method(){
        if(!myWeakset2.has(this)){
            throw new Error('You cannot Access this method direc')
        }else{
            return 'i am method'
        }
    }
}

const myClass = new SomeClass();
console.log(myClass.method());


