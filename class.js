class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    calculateArea(){
        return this.width * this.height
    }
    calculateRange(){
        return 2 * (this.width + this.height)
    }
}

let rectangle1 = new Rectangle(10, 20)
let rectangle2 = new Rectangle(50, 10)


console.log(rectangle2.calculateArea())
