const RectAngle = function(width, height){
    this.width = width;
    this.height = height;

    this.draw = function(){
        console.log('I AM RECTANGLE')
        this.print()
    }

    this.print = function (){
        console.log(`Area is: ${this.width + this.height}`)
    }
}


var rect = new RectAngle(10, 20)
rect.draw()


const Rect = function(){
    console.log(this)
}

// new Rect()


// function myNew(constructor){
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments);
//     constructor.apply(obj, argsArray.slice(1))

//     return obj
// }

// const rect2 = myNew(RectAngle, 10, 20)

// rect2.draw()