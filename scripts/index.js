var http, htmlHeader, cssHeader, fileSystem, 
url, dCSSPath, path, cssFilePath, indexFilePath;

http = require('http');
fileSystem = require('fs');
url = require('url');

dCSSPath = '/css'; // The async path/function to the JSON file
cssFilePath = 'css/styles.css';

dJSPath = '/js';
jsFilePath = 'scripts/main.js';

indexFilePath = 'index.htm';

htmlHeader = {'Content-Type': 'text/html'};
cssHeader = {'Content-Type': 'text/css'};
jsHeader=  {'Content-Type': 'application/javascript'};

function sHeader(response){ // Set headers
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Origin', 'https://www.mocky.io/*');	
	response.setHeader('Access-Control-Allow-Methods', 'GET');
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
};

http.createServer(function(request, response){ 
	path = url.parse(request.url).pathname;
	if(path == dCSSPath){ // Serve the JSON resource via HTTP
		fileSystem.readFile(cssFilePath, 'UTF8', function(error, css){
			sHeader(response);
			response.writeHead(200, cssHeader);
			response.end(css);			
		});		
	}
	else if(path == dJSPath){ // Serve the JSON resource via HTTP
		fileSystem.readFile(jsFilePath, 'UTF8', function(error, js){
			sHeader(response);
			response.writeHead(200, jsHeader);
			response.end(js);			
		});		
	}	
	else{ // Serve index.htm via HTTP
		fileSystem.readFile(indexFilePath, function(error, data){
			sHeader(response);
			response.writeHead(200, htmlHeader);
			response.end(data);
		});
	}
}).listen(8080);