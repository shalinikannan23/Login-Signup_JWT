const crypto = require('crypto');

// Generate a random secret key of 64 bytes (hex format)
const secretKey = crypto.randomBytes(64).toString('hex');

// Output the key to the console so that we can copy it
console.log(secretKey);
