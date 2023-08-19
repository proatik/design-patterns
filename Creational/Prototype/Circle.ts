import Shape from "./Shpae";

class Circle implements Shape {
  public x: number = 0;
  public y: number = 0;
  public color: string = "";
  private radius: number = 0;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  setRadius(radius: number) {
    this.radius = radius;
  }

  clone(): Shape {
    const cloned = new Circle(this.x, this.y, this.color);

    cloned.setRadius(this.radius);

    return cloned;
  }
}

export default Circle;
