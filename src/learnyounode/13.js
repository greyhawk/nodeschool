const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const href = url.parse(req.url, true);
  const iso = href.query.iso;
  const path = href.pathname;
  if (path === '/api/parsetime') {
    const date = new Date(iso);
    const json = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(json));
    res.end();
  } else if (path === '/api/unixtime') {
    const json = { unixtime: new Date(iso).getTime() };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(json));
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(process.argv[2]);
