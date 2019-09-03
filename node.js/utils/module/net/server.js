let net=require('net');

let server=net.createServer(function (connection) {
    console.log('client connected');
    connection.on('data', function(data) {
        console.log('客户端:'+data.toString());
        process.stdout.write("回复：");
        process.stdin.on("readable",()=>{
            const chunk = process.stdin.read();
            if (chunk !== null) {
                client.write(chunk);
                client.pipe(client);
            }
        });
    });
    connection.on('end', function() {
        console.log('客户端关闭连接');
    });
    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});
server.listen(8080, function() {
    console.log('server is listening');
});