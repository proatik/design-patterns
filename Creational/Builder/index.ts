import ComputerBuilder from "./ComputerBuilder";

function clientCode() {
  const computer = new ComputerBuilder()
    .setMotherboard("ASUS Prime")
    .setProcessor("Intel Core i7")
    .setMemory(16)
    .setStorage(512)
    .setGraphicsCard("NVIDIA RTX 3060")
    .build();

  computer.describe();
}

export default clientCode;
