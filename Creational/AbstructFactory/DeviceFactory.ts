import { Tablet, SmartPhone, SmartWatch } from "./Devices";

interface DeviceFactory {
  createTablet(): Tablet;
  createSmartPhone(): SmartPhone;
  createSmartWatch(): SmartWatch;
}

export default DeviceFactory;
