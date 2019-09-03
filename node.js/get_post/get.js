
var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

http.createServer((req,res)=>{
    res.writeHeader(200,{'Content-Type':'text/plain;charset=utf-8'});
    let params=url.parse(req.url,true).query;
    res.write("网站名："+params.name);
    res.write("\n");
    res.write("网站URL："+params.url);
    res.end();
}).listen(8099);