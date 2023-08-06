import Car from "./Car";

class Marcedes implements Car {
  model = "Marcedes";
  year = 2022;

  drive(): void {
    console.log(`You are driveing ${this.model} - ${this.year}`);
  }
}

export default Marcedes;
