let fs=require('fs');

let data = '菜鸟教程官网地址：www.runoob.com';

let writeStream=fs.createWriteStream('write.txt');

writeStream.write(data,'utf-8');
/*触发finish事件*/
writeStream.end();

writeStream.on('finish',function () {
    console.log("写入完成。");
});
writeStream.on('error', function(err){
    console.log(err.stack);
});
