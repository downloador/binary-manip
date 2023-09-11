var crypto = require('crypto');
var fs = require('fs');

var buffer = crypto.randomBytes(100)

var newLine = Buffer.from([0x0A, ...Buffer.from("SEPERATION"), 0x0A])
buffer = Buffer.concat([buffer, newLine])

buffer = Buffer.concat([buffer, crypto.randomBytes(100)])

fs.writeFileSync("random-binary-data-file", buffer)