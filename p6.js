/*
Thomas Guthrie
cit 281 
project 6
*/

//class
class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }
  perimeter() {
    return this.sides.length > 1
      ? this.sides.reduce((side1, side2) => side1 + side2)
      : 0;
  }
}
/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/

//rectangle class
class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, length, width, width]);
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }
}
/*
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0
*/

class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area() {
    const triArea = this.perimeter() / 2;
    return Math.sqrt(
      triArea *
        (triArea - this.sideA) *
        (triArea - this.sideB) *
        (triArea - this.sideC)
    );
  }
}
/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];
for (sides of data) {
  let sideObj = null;
  let sideObj2 = null;
  //let sideToString = sides.ToString();
  switch (sides.length) {
    case 0:
      console.log("Shape with 0 sides unsupported");
      break;

    case 1:
      console.log("Shape with 1 side unsupported");
      break;

    case 2:
      let length = sides[0];
      let width = sides[1];
      let sideObj = new Rectangle(length, width);
      let shape = length == width ? "Square" : "Rectangle";
      console.log(
        `${shape} with sides ${length},${width} has perimeter ${sideObj.perimeter()} and area of ${sideObj.area()}`
      );
      break;

    case 3:
      let side1 = sides[0];
      let side2 = sides[1];
      let side3 = sides[2];
      let sideObj2 = new Triangle(side1, side2, side3);
      console.log(
        `Triangle with sides ${side1},${side2},${side3} has perimeter ${sideObj2.perimeter()} and area of ${sideObj2.area()}`
      );
      break;

    default:
      console.log(`Shape with ${sides.length} sides unsupported`);
  }
}
