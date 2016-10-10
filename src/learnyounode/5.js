const fs = require('fs');
const path = require('path');

/* eslint-disable no-console */
fs.readdir(process.argv[2], (error, files) => {
  if (error) throw error;
  const list = files.filter(item => path.extname(item).match(process.argv[3]));
  list.forEach(file => console.log(file));
});
