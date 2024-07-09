// Parent constructor function
function Shape(color) {
    this.color = color;
  }
  // Adding a shared method using the prototype
  Shape.prototype.getColor = function() {
    return this.color;
  };
  // Child constructor function
  function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
  }
  // Setting up inheritance
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;
  // Adding a unique method to the child
  Circle.prototype.getArea = function() {
    return Math.PI * this.radius * this.radius;
  };
  // Creating instances
  const myShape = new Shape("red");
  const myCircle = new Circle(5, "blue");
  console.log(myShape.getColor()); // Output: "red"
  console.log(myCircle.getColor()); // Output: "blue"
  console.log(myCircle.getArea()); // Output: 78.53981633974483