var fetch = require('node-fetch');
async function getTitle(url) {
    let response = await fetch(url);
    let html = await response.text();
    return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
// 上面代码中，函数getTitle内部有三个操作：
// 抓取网页、取出文本、匹配页面标题。只有这三个操作全部完成，才会执行then方法里面的console.log。
// "ECMAScript 2017 Language Specification"
getTitle('https://tc39.github.io/ecma262/').then(console.log)

// await命令后面可以是一个thenable对象（即定义then方法的对象），那么await会将其等同于 Promise 对象，
// 会去执行它的then方法。