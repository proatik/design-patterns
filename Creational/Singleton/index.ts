// multiple modules where Database have been used.
import one from "./one";
import two from "./two";

function clientCode(): void {
  // use those modules.
  one();
  two();
}

export default clientCode;
