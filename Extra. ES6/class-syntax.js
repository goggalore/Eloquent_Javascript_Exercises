class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    
    get area() {
      return this.calcArea();
    }
    
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const rect = new Rectangle(9, 5);
  
  console.log(rect.area);
  
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    
    // static methods are called without instantiating their class,
    // and cannot be called through a class instance
    
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(1, 2);
  const p2 = new Point(5, 4);
  
  console.log(Point.distance(p1, p2));
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(this.name + ' makes a noise.');
    }
    
    eat() {
      console.log(this.name + ' chows on some food');
    }
  };
  
  class Dog extends Animal {
    speak() {
      console.log(this.name + ' barks');
    }
  };
  
  let spot = new Dog('Spot');
  spot.speak();
  spot.eat();
  
  // Classes can also extend traditional function
  // based objects. However they cannot 
  // extend regular (non-constructable) objects.
  
  // Use the Object.setPrototypeOf() to do this