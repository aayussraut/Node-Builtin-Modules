const { readFileSync, writeFileSync, mkdirSync, renameSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//write to a file in a synchronous way
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");

//create a directory in a synchronous way
mkdirSync("./content/test");

//rename a file/dir in a synchronous way
renameSync("./content/result-sync.txt", "./content/renamed.txt");
