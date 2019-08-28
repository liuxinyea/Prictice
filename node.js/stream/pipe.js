let fs=require('fs');
/*
管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
*/
let read=fs.createReadStream('read.txt');
let write=fs.createWriteStream('write.txt');

read.pipe(write);

console.log("执行完毕！");