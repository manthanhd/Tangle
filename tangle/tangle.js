var TangleServer = require('./TangleServer.js');
function Tangle(){
	this.createServer = function(portNumber){
		if(portNumber === undefined || portNumber == undefined){
			throw "Undefined port number.";
		}
		var server = new TangleServer();
		server.port = portNumber;
		return server;
	}
}
module.exports = new Tangle();