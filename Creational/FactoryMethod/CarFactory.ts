import Car from "./Car";
import Ford from "./Frod";
import Tesla from "./Tesla";
import Catalog from "./Catalog";
import Marcedes from "./Marcedes";

class CarFactory {
  public createCar(type: string): Car {
    if (type === Catalog.Tesla) {
      return new Tesla();
    } else if (type === Catalog.Marcedes) {
      return new Marcedes();
    } else if (type === Catalog.Ford) {
      return new Ford();
    } else {
      throw new Error("Invalid type");
    }
  }
}

export default CarFactory;
