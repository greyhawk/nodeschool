const fs = require('fs');

/* eslint-disable no-console */
fs.readFile(process.argv[2], (error, data) => {
  if (error) throw error;
  const length = data.toString().split('\n').length - 1;
  console.log(length);
});
