const EventEmitter = require("events");

//creating an instance of EventEmitter
const myEmitter = new EventEmitter();

//listening to an event
myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

//emitting an events
myEmitter.emit("newSale");

//listening to an event with arguments
myEmitter.on("customEvent", (arg1, arg2) => {
  console.log("Received arguments:", arg1, arg2);
});

//emitting an event with arguments
myEmitter.emit("customEvent", "Hello", 42);

//listening to an event only once
myEmitter.once("onceEvent", () => {
  console.log("This listener will be invoked only once.");
});

//emitting an event multiple times
myEmitter.emit("onceEvent");
myEmitter.emit("onceEvent");

// Register event listener
myEmitter.on("myEvent", () => {
  console.log("Event occurred!");
});

// Emit the event
myEmitter.emit("myEvent"); // Output: Event occurred!

// Remove all listeners for the 'myEvent' event
myEmitter.removeAllListeners("myEvent");
