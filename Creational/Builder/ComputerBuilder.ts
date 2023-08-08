import Computer from "./Computer";

class ComputerBuilder {
  private motherboard: string = "";
  private processor: string = "";
  private memory: number = 0;
  private storage: number = 0;
  private graphicsCard: string = "";

  public setMotherboard(motherboard: string): ComputerBuilder {
    this.motherboard = motherboard;
    return this;
  }

  public setProcessor(processor: string): ComputerBuilder {
    this.processor = processor;
    return this;
  }

  public setMemory(memory: number): ComputerBuilder {
    this.memory = memory;
    return this;
  }

  public setStorage(storage: number): ComputerBuilder {
    this.storage = storage;
    return this;
  }

  public setGraphicsCard(graphicsCard: string): ComputerBuilder {
    this.graphicsCard = graphicsCard;
    return this;
  }

  public build(): Computer {
    return new Computer(
      this.motherboard,
      this.processor,
      this.memory,
      this.storage,
      this.graphicsCard
    );
  }
}

export default ComputerBuilder;
