let fs=require('fs');

let data='';
let readStream=fs.createReadStream('./read.txt');

readStream.on('data',function (res) {
    data+=res;
});
readStream.on('error',function (error) {
    console.log(error);
});
readStream.on('end',function (res) {
    console.log(data);
});