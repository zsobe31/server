var http = require('http');
var multiply = require('./multiply-module');
var fs = require('fs');


function onRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
//  response.write(multiply.moduleMessage);
//  multiply.logProduct(7);
//  response.end();
//}
//
//http.createServer(onRequest).listen(3000);
//console.log('The server is running...');
fs.readFile('./index.html', null, function(error, data) {
	if (error) {
		response.writeHead(404);
		response.write('File not found');
	} else {
		response.write(data);
	}
	response.end();
});
}
