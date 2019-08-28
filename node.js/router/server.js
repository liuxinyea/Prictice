
var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
         var pathname = url.parse(request.url).pathname.split('/')[1]+".html";
         console.log("Request for " + pathname + " received.");

         route(pathname,function (res) {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
            response.write(res);
            response.end();
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;
