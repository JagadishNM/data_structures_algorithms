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

// Implement Land class in such a way we can have object chaining  
// let land = new Land(); 
// and.setParams("500 sq ft").close().doorStatus().open().doorStatus(); 
// output is 500 sq ft closed opened 

class Land {
    constructor() {
        this.params = ""; // To store the land parameters
        this.door = "closed"; // Default door status
    }

    setParams(params) {
        this.params = params; // Set the land parameters
        return this; // Enable chaining by returning `this`
    }

    close() {
        this.door = "closed"; // Set the door status to closed
        return this; // Enable chaining
    }

    open() {
        this.door = "opened"; // Set the door status to opened
        return this; // Enable chaining
    }

    doorStatus() {
        console.log(`${this.params} ${this.door}`); // Output the current state
        return this; // Enable chaining
    }
}

// Example usage
let land = new Land();
land.setParams("500 sq ft").close().doorStatus().open().doorStatus();
// Output:
// Copy code
// 500 sq ft closed
// 500 sq ft opened
// Explanation:
// Chaining with return this:
// Each method returns this, allowing subsequent method calls on the same object.
// State Tracking:
// The params property tracks the land's parameters.
// The door property tracks the door's state.
// Console Output:
// The doorStatus method prints the current land parameters and door state.