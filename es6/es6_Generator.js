/*基于回调函数的Generator的异步耗时自动顺序执行的实现（异步操作同步化）*/

//模拟耗时操作
function yiBu(index,callback) {
    setTimeout(()=>{
         callback(index);
    },1000)
}
//迭代器对象生成函数
function*gen(callback){

    yield yiBu(1,callback);

    yield yiBu(2,callback);

    yield yiBu(3,callback);

    yield yiBu(4,callback);

    return null;
}
//执行每个任务
function run(gen){
    //每个任务返回的结构
    let result={value:undefined,done:false};
    if(!result.done){
        result=gen.next();
    }
}
//要传入的回调函数
function callback(res) {
    console.log(`${res} finished`);
    run(g)
}
//生成迭代对象，并传入回调函数
let g=gen(callback);
//开始任务序列
// run(g);

/*状态机*/
let clock = function* () {
    while (true) {
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
    }
};
c=clock();
c.next();


/*Promise异步操作的实现*/
var fetch = require('node-fetch');
function* gen(){
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    console.log(result.location);
}
let fg=gen();
let result=fg.next();
//result.value是一个Promise对象
result.value.then(function (res) {
    return res.json();
}).then(function (res) {
    //将执行权返回给gen，并传递res上一步的执行结构
    fg.next(res);
});


/*Thunk 函数转换器实现原理。*/
const Thunk = function(fn) {
    return function (...args) {
        return function (callback) {
            return fn.call(this, ...args, callback);
        }
    };
};
function f(a, cb) {
    cb(a);
}
const ft = Thunk(f);
ft(1)(console.log);


/*基于thunkify函数实现Generator 函数的自动流程管理*/
var fs = require('fs');
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);

var gen = function* (){
    var r1 = yield readFileThunk('read.txt');
    console.log(r1.toString());
    var r2 = yield readFileThunk('write.txt');
    console.log(r2.toString());
};
function run(fn) {
    var gen = fn();
    //回调函数
    function next(err, data) {
        var result = gen.next(data);
        if (result.done) return;
        //result.value返回的是只有一个回调函数的函数
        result.value(next);
    }
    next();
}
run(gen);



/*co基于Promise用于Generator 函数的自动流程管理*/
var fs = require('fs');
var co = require('co');
var readFileThunk = thunkify(fs.readFile);

var readFile = function (fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function(error, data){
            if (error) return reject(error);
            resolve(data);
        });
    });
};
co(function* (){
    var f1 = yield readFile('read.txt');
    var f2 = yield readFile('write.txt');
    console.log(f1.toString());
    console.log(f2.toString());
});




