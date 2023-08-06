import DeviceFactory from "./DeviceFactory";
import AppleFacctory from "./AppleFactory";
import SamsungFactory from "./SamsungFactory";

function clienCode(factory: DeviceFactory): void {
  const phone = factory.createSmartPhone();
  phone.powerOn();
  phone.makeCall();

  const watch = factory.createSmartWatch();
  watch.powerOn();
  watch.showPulseRate();

  const tablet = factory.createTablet();
  tablet.powerOn();
  tablet.playGame();
}

export default () => {
  const factory = new SamsungFactory();
  clienCode(factory);
};
