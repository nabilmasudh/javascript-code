const startTime = performance.now()

for(let i = 0; i <= 50; i++){
    console.log(i)
}

const endTime = performance.now()

console.log(`loop took ${endTime - startTime} milliseconds to finish`)
console.log({startTime},{endTime})