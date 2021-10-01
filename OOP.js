// ==============Procedural======================


// let width = 5;
// let height = 10;

// function calculateArea(width, height){
//     return width * height
// }

// function calculateRange(width, height){
//     return 2 * (width + height)
// }

// var area = calculateArea(width, height)
// console.log(`This is Procedural Area: ${area}`)
// var range = calculateRange(width, height)
// console.log(`This is Procedural Range: ${range}`)





// ==============Object Oriented======================

const rectangle = {
    width: 5,
    height: 10,

    calculateArea: function(){
        return this.width * this.height
    },
    calculateRange: function(){
        return 2 * (this.width + this.height)
    }
}

var area = rectangle.calculateArea()
console.log(`This is Object Oriented Area: ${area}`)
var range = rectangle.calculateRange()
console.log(`This is Object Oriented Range: ${range}`);

// ==============Object Oriented======================

const gift = {

    nodeBook: function(){
        console.log('This is Node Book')
    },
    book: function(){
        console.log('This is Book')
    },
    pen: function(){
        console.log('this is Pen')
    }
}

gift.nodeBook()
gift.book()
gift.pen()