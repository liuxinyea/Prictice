const fs=require('fs');
const child_process=require('child_process');
for(let i=0;i<3;i++){
    /*使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回*/
    // let workProcess=child_process.exec('node support.js '+i,function (error, stdout, stderr) {
    //     if(error){
    //         console.log(error.stack);
    //         console.log('Error code: '+error.code);
    //         console.log('Signal received: '+error.signal);
    //     }
    //     console.log('stdout: '+stdout);
    //     console.log('stderr: '+stderr);
    // });
    // workProcess.on('exit',function (code) {
    //     console.log('子进程退出，退出码为'+code);
    // })

    var worker_process = child_process.fork("support.js", [i]);

    worker_process.on('close', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}