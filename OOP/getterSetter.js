const Rectangle = function(width, height){

    let myObject = {
        x: 100,
        y: 200
    }

    this.width = width
    this.height = height

    const myPrint = function(){
        console.log(`Area is : ${this.width + this.height}`)
    }.bind(this)

    this.draw = function(){
        myPrint()
        console.log('I am a draw function')
    }

    this.getmyObject = function () {
      return myObject;
    };

    Object.defineProperty(this, "myObject", {
      get: function () {
        return myObject;
      },
      set: function (value) {
        myObject = value;
      },
    });
}

let rect = new Rectangle(400, 200)
rect.draw()
rect.myObject = {
    x: 1234,
    y: 5678
}
console.log(rect.myObject)


