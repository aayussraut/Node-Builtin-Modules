const path = require("path");

//path.sep is used to get the separator for the current OS
console.log(path.sep);

//path.join is used to join the paths
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

//path.basename is used to get the base file name
const base = path.basename(filePath);
console.log(base);

//path.resolve is used to get the absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
