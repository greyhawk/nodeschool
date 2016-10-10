const http = require('http');
const concat = require('concat-stream');

const ps = [];

function getContent(path) {
  return new Promise((resolve, reject) => {
    http.get(path, (res) => {
      try {
        res.pipe(concat(data => resolve(data.toString())));
      } catch (e) {
        reject(e);
      }
    });
  });
}

for (let i = 2; i < process.argv.length; i += 1) {
  ps.push(getContent(process.argv[i]));
}

/* eslint-disable no-console */
Promise.all(ps).then(contents => contents.forEach(c => console.log(c)));
