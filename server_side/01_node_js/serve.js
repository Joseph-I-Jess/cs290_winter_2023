const http = require('http');

const hostname = '127.0.0.1';
const port = 3030;

//Or perhaps go through a tutorial like this one: https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<html><body><p>Hello!</p><ol><li>item 1</li><li>item 2</li></ol></body></html>");
  res.write("\n\ndone?");
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});