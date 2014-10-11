module.exports = function TangleServer(){
	this.express = require('express');
	this.app = this.express();
	this.port = undefined;
	this.scope = {};

	this.start = function(callback){
		console.log("Starting tangle server...");
		if(this.port == undefined || this.port === undefined){
			throw "Port is undefined.";
		}
		
		var parentThis = this;

		for(var property in this.scope){
			if(typeof this.scope[property] == 'function'){
				console.log("Function found!");
				console.log(parentThis.scope[property].arguments.length);
				var callable = function(req, res){
					console.log("Listening on " + property);
					res.send(parentThis.scope[property](req.params));
				};


				this.app.get("/" + property, callable);
			}
			
		}
		console.log("Tangle server started!");
		this.app.listen(this.port, callback);
		typeof callback === 'function' && callback();
	}
}