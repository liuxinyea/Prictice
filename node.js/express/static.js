let express=require('express');
let fs=require('fs');
let multer=require('multer');
let bodyParser=require('body-parser');
let app=express();

// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser=bodyParser.urlencoded({extended:false});

app.use('/img',express.static('img'));
app.get('/',function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
});
app.post('/process_post',urlencodedParser,function (req, res) {
    let response={
        'first_name':req.body.first_name,
        'last_name':req.body.last_name
    }
    res.send(JSON.stringify(response))
})
app.get('/process_get',function (req, res) {
    let response={
        'first_name':req.query.first_name,
        'last_name':req.query.last_name
    }
    res.send(JSON.stringify(response))
})

let storage=multer.diskStorage({
    destination:function (req, file, cb) {
        // 接收到文件后输出的保存路径（若不存在则需要创建）
        cb(null, 'upload/');
    },
    filename:function (req, file, cb) {
        // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
        cb(null, Date.now() + "-" + file.originalname);
    }
})
// 创建文件夹
let createFolder = function(folder){
    try{
        // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
        // 如果文件路径不存在将会抛出错误"no such file or directory"
        fs.accessSync(folder);
    }catch(e){
        // 文件夹不存在，以同步的方式创建文件目录。
        fs.mkdirSync(folder);
    }
};
let uploadFolder = './upload/';
createFolder(uploadFolder);

let upload=multer({storage:storage});

app.post('/file_upload', upload.single('file'),function (req, res) {
    console.log(req.file);
    var file = req.file;
    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);
    // 接收文件成功后返回数据给前端
    res.json({res_code: '0'});
})
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('应用实例，访问地址为 http://127.0.0.1:8081')

})