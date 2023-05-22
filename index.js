const http = require("http");

//creating an HTTP server
const server = http.createServer((req, res) => {
  console.log("Received request:", req.method, req.url);
  //res.write can be used to send a chunk of data multiple times
  res.write("Hello World");
  //res.end is used to end the response
  res.end("Hello World");
});

//starting the server and listening on port 3000
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
