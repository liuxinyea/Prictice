let http=require('http');
let fs=require('fs');

function onRequest(request, response) {
    // response.writeHead(200, {"Content-Type": "text/plain"});
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    let htmlStr='';
    let indexHtml=fs.createReadStream('./index.html');
    indexHtml.on("data",function (data) {
        htmlStr+=data;
    });
    indexHtml.on("end",function () {
        response.write(htmlStr);
        response.end();
    });
}

http.createServer(onRequest).listen(8888);