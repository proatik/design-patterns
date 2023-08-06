import DeviceFactory from "./DeviceFactory";
import { Tablet, SmartPhone, SmartWatch } from "./Devices";

class SamsungFactory implements DeviceFactory {
  createTablet(): Tablet {
    return new SamsungTablet();
  }

  createSmartPhone(): SmartPhone {
    return new SamsungSmartPhone();
  }

  createSmartWatch(): SmartWatch {
    return new SamsungSmartWatch();
  }
}

class SamsungSmartPhone implements SmartPhone {
  powerOn(): void {
    console.log("Power ON || S22 Ultra");
  }

  makeCall(): void {
    console.log("Making call || S22 Ultra");
  }
}

class SamsungSmartWatch implements SmartWatch {
  powerOn(): void {
    console.log("Power ON || Samsung Watch");
  }

  showPulseRate(): void {
    console.log("72 bpm || Samsung Watch");
  }
}

class SamsungTablet implements Tablet {
  powerOn(): void {
    console.log("Power ON || Samsung Tab 7");
  }

  playGame(): void {
    console.log("Playing Game || Samsung Tab 7");
  }
}

export default SamsungFactory;
