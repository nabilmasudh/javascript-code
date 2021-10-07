const myRectangle = function(width, height){
    return {
        
        width: width,
        height: height,

        calculateArea: function(){
            console.log('i am a calulator')
            this.printArea()
        },
        printArea: function(){
            console.log(this.width * this.height);
        }
    }
}

let rectangle = myRectangle(10, 2)
rectangle.calculateArea()

let rectangle2 = myRectangle(5, 2);
rectangle2.calculateArea();
