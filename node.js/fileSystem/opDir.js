let fs=require('fs');

// tmp 目录必须存在
console.log("创建目录 /tmp/test1");
fs.mkdir("/tmp/test1", { recursive: true },function(err){
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
    fs.rmdir("/tmp/test", function (err) {
        if(err){
            console.log(err);
        }
        fs.readdir("/tmp/",function(err, files){
            if (err) {
                return console.error(err);
            }
            files.forEach( function (file){
                console.log( file );
            });
        });
    })

});

fs.watch('input.txt', {}, function (err,file) {
    if (file) {
        console.log(file);
    }
})
