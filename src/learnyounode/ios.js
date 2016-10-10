const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const content = buffer.toString();
/* eslint-disable no-console */
const length = content.split('\n').length - 1;
console.log(length);
