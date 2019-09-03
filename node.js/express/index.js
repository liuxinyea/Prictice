let express=require('express');
let app=express();

app.get('/',function(req,res){
    res.send('Hello Word');
});

let server=app.listen(8081,function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://localhost:8081")
});