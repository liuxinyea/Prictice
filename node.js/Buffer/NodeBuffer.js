/*
创建一个长度为 10、且未初始化的 Buffer。
这个方法比调用 Buffer.alloc() 更快，
但返回的 Buffer 实例可能包含旧数据，
因此需要使用 fill() 或 write() 重写。
*/
const buf3 = Buffer.allocUnsafe(10);
//创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
var buf = Buffer.alloc(14);
/*
写入buffer,从第0个字符到14个写入
*/
buf.write("www.runoob.com",0,14,'utf-8');
/*
读取buffer
*/
console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,14));    // 输出: abcde
console.log( buf.toString(undefined,0,14)); // 使用 'utf8' 编码, 并输出: abcde
// buf = Buffer.from([0x74, 0xe9, 0x73, 0x74]);
// console.log(buf.toString());
/*
合并buffer
*/
var buffer1 = Buffer.from('菜鸟教程');
var buffer2 = Buffer.from('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

let isSame=buffer1.equals(buffer2)

console.log(isSame);