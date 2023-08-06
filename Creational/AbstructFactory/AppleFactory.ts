import DeviceFactory from "./DeviceFactory";
import { Tablet, SmartPhone, SmartWatch } from "./Devices";

class AppleFactory implements DeviceFactory {
  createTablet(): Tablet {
    return new AppleTablet();
  }

  createSmartPhone(): SmartPhone {
    return new AppleSmartPhone();
  }

  createSmartWatch(): SmartWatch {
    return new AppleSmartWatch();
  }
}

class AppleSmartPhone implements SmartPhone {
  powerOn(): void {
    console.log("Power ON || iPhone - 12");
  }

  makeCall(): void {
    console.log("Making call || iPhone - 12");
  }
}

class AppleSmartWatch implements SmartWatch {
  powerOn(): void {
    console.log("Power ON || Apple Watch");
  }

  showPulseRate(): void {
    console.log("72 bpm || Apple Watch");
  }
}

class AppleTablet implements Tablet {
  powerOn(): void {
    console.log("Power ON || iPad - 6");
  }

  playGame(): void {
    console.log("Playing Game || iPad - 6");
  }
}

export default AppleFactory;
