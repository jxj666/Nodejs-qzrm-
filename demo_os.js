const os = require("os");
const cpus = os.cpus();
console.log(cpus);
const memory = os.totalmem();
console.log(memory / 1024 / 1024 / 1024);
const memory_free = os.freemem();
console.log(memory_free / 1024 / 1024 / 1024);
