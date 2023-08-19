import Shape from "./Shpae";
import Circle from "./Circle";
import Rectangle from "./Rectangle";

function clientCode() {
  const shapes: Shape[] = [];

  const circle1 = new Circle(10, 22, "red");
  circle1.setRadius(8);
  shapes.push(circle1);

  const circle2 = circle1.clone();
  shapes.push(circle2);

  const rectangle1 = new Rectangle(134, 42, "blue");
  rectangle1.setHeight(16);
  rectangle1.setWidth(32);
  shapes.push(rectangle1);

  const rectangle2 = rectangle1.clone();
  shapes.push(rectangle2);

  console.log(shapes);
}

export default clientCode;
