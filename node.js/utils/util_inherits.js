let util=require('node.js/utils/util_inherits');

function Base() {
    this.name="base";
    this.base=1991;
    this.sayHello=function () {
        console.log("Hello "+this.name);
    }
}
/*showName这个方法不属于Base也不属于Sub，属于两者的原型，
因此不在两者的可枚举属性中，不能打印出来*/
Base.prototype.showName=function () {
    console.log(this.name);
};

function Sub() {
    this.name="sub";
}
/*这里的继承的是Base的原型而不是Base本身*/
util.inherits(Sub,Base);

let objBase=new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
let objSub=new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);