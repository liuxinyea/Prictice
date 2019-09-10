let express=require('express');
let app=express();

app.get('/',function(req,res){
    console.log('主页GET请求')
    res.send('Hello Word');
    // res.sendFile('F:/MyPricticePro/nodePrictice/img/1111.jpg')
});
app.post('/',function(req,res){
    console.log('主页POST请求')
    res.send('Hello Word');
});

app.get('/del_user',function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
});
app.get('/list_user',function (req, res) {
    console.log("/list_user 响应 GET 请求");
    res.send('用户列表页面');
});
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})

let server=app.listen(8081,function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://localhost:8081")
});