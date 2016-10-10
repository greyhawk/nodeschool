const http = require('http');
const concat = require('concat-stream');

/* eslint-disable no-console */
http.get(process.argv[2], (res) => {
  res.pipe(concat((data) => {
    const content = data.toString();
    console.log(content.length);
    console.log(content);
  }));
});
