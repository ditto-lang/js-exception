import { main } from "./dist/Exception_Test.js";

const ok = main();
if (!ok) {
  console.error("😬");
  process.exit(1);
}
console.info("👍");
