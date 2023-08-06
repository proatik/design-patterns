import Car from "./Car";

class Ford implements Car {
  model = "Ford";
  year = 2020;

  public drive(): void {
    console.log(`You are driveing ${this.model} - ${this.year}`);
  }
}

export default Ford;
