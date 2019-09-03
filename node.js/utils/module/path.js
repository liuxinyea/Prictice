let path=require('path');



let path1='../a';
let path2='b';
let path3='c';
/*拼接路径*/
let p=path.join(path1,path2,path3);
/*解析路径，从右往左解析*/
p=path.resolve('/foo/bar', './baz');
console.log(p);
p=path.resolve('/foo/bar', '/tmp/file/');
console.log(p);
p=path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
console.log(p);
/*生成相对路径*/
p=path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');

console.log(p);