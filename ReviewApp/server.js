var http = require('http');
var url = require('url');

function startserver(route, handle) {
    var onRequest = function(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('request received for '+pathname);
        request.setEncoding("utf8");

        var reviewData = "";
        request.addListener("data", function(chunk){
            reviewData += chunk;
        });

        request.addListener("end", function(){
            route(handle, pathname, response, reviewData);
        });
    }
    http.createServer(onRequest).listen(8888);
    console.log("server stared at port 8888, Server URL: http:localhost:8888/");
}

exports.startserver = startserver;