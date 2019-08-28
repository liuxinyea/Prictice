Array.prototype.MyMap = function(fn, context){
    var arr = Array.prototype.slice.call(this);//由于是ES5所以就不用...展开符了
    // console.log(this);
    var mappedArr = [];
    for (var i = 0; i < arr.length; i++ ){
        if(!arr.hasOwnProperty(i))continue;
        mappedArr.push(fn.call(context, arr[i], i, this));
    }
    return mappedArr;
};
let array=[1,2,3,4,5,6];

let b= array.MyMap(function (item, index, array) {
   return item*5;
},array);
console.log(b);

Object.prototype.deepCopy=function () {
    let old=this;
    let newOb={};
    for(let prop in old){
        if(prop==="deepCopy") continue;
        newOb[prop]=old[prop]
    }
    return newOb;
};
let a={name:'liuxinye',age:25};
b=a.deepCopy();
b.name="xujihua";
console.log(a);
console.log(b);
function MyPromise(func){
    var resolve,reject;
    var self=this;
    var isEnd=false;
    /*在then方法或者catch方法之后执行finally方法*/
    this.then=function (res,rej) {
        resolve=res;
        reject=rej;
        try{
            func.call(this,resolve,reject);
        }catch {
            self.catch(rej)
        }

        return this;
    };
    this.catch=function (rej) {
        reject=rej;
        return this;
    };
    this.finally=function () {
        return this;
    }
}
function asny() {
    return new MyPromise((resolve,reject ) => {
          setTimeout(()=>{
              resolve("succuss");
          },1000);
        reject('eee')
    })
}

asny().then(function (res) {
    console.log(res);
},function (error) {
    console.log(error);
}).catch(function (error) {
    console.log(error);
});
