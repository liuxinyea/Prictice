let fs=require('fs');
let zlib=require('zlib');
fs.createReadStream('read.txt')
    .pipe(zlib.createGzip())//转为gzip压缩流
    .pipe(fs.createWriteStream('read.txt.gz'));

console.log("文件压缩完成。");