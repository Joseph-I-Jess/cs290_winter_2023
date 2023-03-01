var http = require('http');

function request_response(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<body><p>Hello World</p><h2>This is a header</h2></body>');
}

var proposed_port = 8080;

var server = http.createServer(request_response);
server.listen(proposed_port);

console.log('Server started, listening on port ' + proposed_port);
