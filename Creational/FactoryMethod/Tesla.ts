import Car from "./Car";

class Tesla implements Car {
  model = "Tesla";
  year = 2021;

  drive(): void {
    console.log(`You are driveing ${this.model} - ${this.year}`);
  }
}

export default Tesla;
