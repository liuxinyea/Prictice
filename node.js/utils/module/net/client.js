var net = require('net');
var client = net.connect({port: 8081}, function() {
    console.log('连接到服务器！');
});

client.on('data', function(data) {
    console.log("服务器："+data.toString());
    process.stdout.write("回复：");
    process.stdin.on("readable",()=>{
        const chunk = process.stdin.read();
        if (chunk !== null) {
            client.write(chunk);
            client.pipe(client);
        }
    });
    // client.end();
});
client.on('end', function() {
    console.log('断开与服务器的连接');
});
