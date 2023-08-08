class Computer {
  private motherboard: string;
  private processor: string;
  private memory: number;
  private storage: number;
  private graphicsCard: string;

  constructor(
    motherboard: string,
    processor: string,
    memory: number,
    storage: number,
    graphicsCard: string
  ) {
    this.motherboard = motherboard;
    this.processor = processor;
    this.memory = memory;
    this.storage = storage;
    this.graphicsCard = graphicsCard;
  }

  public describe(): void {
    console.log(`Computer specifications:
      Motherboard: ${this.motherboard},
      Processor: ${this.processor},
      Memory: ${this.memory}GB,
      Storage: ${this.storage}GB,
      Graphics Card: ${this.graphicsCard}`);
  }
}

export default Computer;
