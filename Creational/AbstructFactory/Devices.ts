export interface Tablet {
  powerOn(): void;
  playGame(): void;
}

export interface SmartPhone {
  powerOn(): void;
  makeCall(): void;
}

export interface SmartWatch {
  powerOn(): void;
  showPulseRate(): void;
}
