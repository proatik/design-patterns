import Shape from "./Shpae";

class Rectangle implements Shape {
  public x: number = 0;
  public y: number = 0;
  public color: string = "";
  private width: number = 0;
  private height: number = 0;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  clone(): Shape {
    const cloned = new Rectangle(this.x, this.y, this.color);

    cloned.setWidth(this.width);
    cloned.setHeight(this.height);

    return cloned;
  }
}

export default Rectangle;
