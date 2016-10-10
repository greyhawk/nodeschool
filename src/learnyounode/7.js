const http = require('http');

/* eslint-disable no-console */
http.get(process.argv[2], (res) => {
  res.setEncoding('UTF-8');
  res.on('data', data => console.log(data));
  res.on('error', error => console.error(error));
}).on('error', error => console.error(error));
