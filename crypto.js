const crypto = require("crypto");

let algorithm = "aes-256-cbc";
const password = "MySecretPassword";
const plainText = "Hello, World!";

// Create a cipher
const cipher = crypto.createCipher(algorithm, password);
let encryptedData = cipher.update(plainText, "utf8", "hex");
encryptedData += cipher.final("hex");
console.log("Encrypted Data:", encryptedData);

// Create a decipher
const decipher = crypto.createDecipher(algorithm, password);
let decryptedData = decipher.update(encryptedData, "hex", "utf8");
decryptedData += decipher.final("utf8");
console.log("Decrypted Data:", decryptedData);

algorithm = "sha256";
const data = "Hello, World!";

const hash = crypto.createHash(algorithm);
hash.update(data);
const digest = hash.digest("hex");

console.log(`Original Data: ${data}`);
console.log(`Hash Algorithm: ${algorithm}`);
console.log(`Hash Digest: ${digest}`);
