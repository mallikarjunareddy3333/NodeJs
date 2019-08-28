# NodeJs

NodeJs

What?
	- Is a runtime environemt used to create web applications.
	- It allows us to run javascript at backend outside of browser.
	- It is also a library because it comes with lot of built-in modules that helps us save to code the things from scrach.

Why?
	- Frontend & Backend JS
	- Extreamly fast (runs on google v8 engine)
	- Creates games & chat rooms
- objects and methods (__filename, __dirname)
- functions, anonimous functions
- callback function:
	another function, that can be passed as an argument to another function and it usually invoke after certain kind of event.
- modules:
	module.exports = {
		relay: function() {
			console.log("This is relay function");
		},
		longjump: function() {
			console.log("This is longjump function");
		}
	}
	var athletics = require("./athletics");
	
Http Module:
	http.createServer(function(req, res)).listen(port);

Events Module:

url
querystring
fs
