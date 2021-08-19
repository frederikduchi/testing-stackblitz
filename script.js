console.log('hello!');
{
  class Shape {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.width = 100;
      this.height = 100;
    }
    get surface() {
      // getter = functie oproepen bij opvragen property
      return this.width * this.height;
    }
    logSurface() {
      console.log(`My surface is ${this.surface}`);
    }
  }

  class Circle extends Shape {
    constructor() {
      super(); // In PHP: parent::__construct();
      this.radius = 50;
    }
    get surface() {
      return this.radius * this.radius * Math.PI;
    }
  }

  const circle = new Circle();
  console.log(circle.width);
  console.log(circle.height);
  console.log(circle.surface); // getter = eigenschap die je koppelt aan een functie
  circle.logSurface();
}
