import CarFactory from "./CarFactory";

function clientCode(): void {
  const carFactory = new CarFactory();

  const tesla = carFactory.createCar("Tesla");
  const marcedes = carFactory.createCar("Marcedes");
  const ford = carFactory.createCar("Ford");

  tesla.drive();
  marcedes.drive();
  ford.drive();
}

export default clientCode;
