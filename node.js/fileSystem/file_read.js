let fs=require('fs');
/*异步读取*/
fs.readFile('input.txt',function (err, data) {
    if(err){
        return console.log(err)
    }
    console.log("异步读取："+data.toString());
});
// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

/*缓存异步读取*/
let buffer=new Buffer.alloc(1024);
fs.open('input.txt','r+',function (err, fd) {
    if(err)
        console.log(err);
    fs.read(fd,buffer,0,buffer.length,0,function (err, bytes) {
        if (err){
            console.log(err);
        }
        console.log(bytes + "  字节被读取");
        // 仅输出读取的字节
        if(bytes>0){
            console.log(buffer.slice(0, bytes).toString());
        }
    })
})


