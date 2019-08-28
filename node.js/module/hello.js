/*
exports导出一个对象，对象的word属性是一个函数
module.exports导出一个对象或者一个函数，对象的word属性是一个函数.
exports 和 module.exports 的使用
如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。
*/
function Hello() {
    let word;
    this.setWord=function (sword) {
        word=sword;
    }
    this.sayWord=function () {
        console.log('Hello ' + word);
    }
}
module.exports=Hello;
// exports.Hello= function() {
//     let word;
//     this.setWord=function (sword) {
//         word=sword;
//     }
//     this.sayWord=function () {
//         console.log('Hello ' + word);
//     }
// };

