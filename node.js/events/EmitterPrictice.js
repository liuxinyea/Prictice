
var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1=function () {
    console.log('监听器 listener1 执行。');
}
var listener2=function () {
    console.log('监听器 listener2 执行。')
}
// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);
// 触发连接事件
eventEmitter.emit('connection');
// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");

//触发事件时，绑定了几个事件就触发几个，按照绑定事件的顺序执行