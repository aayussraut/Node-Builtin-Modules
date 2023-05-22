const fs = require("fs");

const stream = fs.createReadStream("./content/big.txt");

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));

// Create a readable stream from a file
const readableStream = fs.createReadStream("./content/big.txt");

// Create a writable stream to a file
const writableStream = fs.createWriteStream("./content/output.txt");

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle the 'finish' event when the write operation is complete
writableStream.on("finish", () => {
  console.log("Write operation completed.");
});
