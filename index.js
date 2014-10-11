var tangle = require('./tangle/tangle.js');
console.log(tangle);
var server = tangle.createServer(3000);
server.scope.name = "Manthan";
server.scope.getName = function() { 
	console.log("getName has been called.");
	return server.scope.name 
};
server.start();