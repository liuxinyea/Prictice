let express=require('express');
let app=express();
let data=require('./data/users')
let fs=require('fs');

app.get('/',function (req, res) {
    res.sendFile(__dirname+"/"+"index.html")
});
app.get('/listUsers',function (req, res) {
    console.log(data);
    res.end(JSON.stringify(data));
});
app.get('/user/:id',function (req, res) {
    fs.readFile( __dirname + "/" + "data/users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})
var server = app.listen(8081, function () {


    console.log("应用实例，访问地址为 http://%s:%s","localhost",server.address().port)
})