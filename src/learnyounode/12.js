const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
  } else {
    res.end();
  }
});
server.listen(process.argv[2]);
