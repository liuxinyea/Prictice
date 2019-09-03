let http=require('http');
let fs=require('fs');
let url = require('url');

function onRequest(request, response) {
    let pathName=url.parse(request.url).pathname;
    fs.readFile(pathName.substr(1),function (err, data) {
          if(err){
              response.writeHead(404, {'Content-Type': 'text/html'});
              let noFile=fs.readFileSync('404.html');
              response.write(noFile)
          }else{
              response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
              response.write(data.toString())

          }
        response.end();
    })
}
http.createServer(onRequest).listen(8080);