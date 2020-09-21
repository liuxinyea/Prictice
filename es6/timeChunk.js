

function timeChunk(arr,fn,count,interval){
    let t;
    let chunkTask=function(){
        for(let i=0;i<Math.min(count||1,arr.length);i++){
            fn();
        }
    }
    return function(){
        t=setInterval(()=>{
             if(arr.length==0){
                 clearInterval(t);
             }
             chunkTask(); 
        },interval);
    }
}

//asyn实现原理，相当于自动执行的Geneartor函数
function asyn(genFn){
    return new Promise((resolve,reject)=>{
        let gen=genFn();//生成迭代器对象
    
        function doNext(nextFn){
            let next=nextFn();
            if(next.done){
                return resolve(next.value);
            }else{
                doNext(()=>gen.next);
            }
        }
        doNext(()=>gen.next());
    })
}

function autoExecutor(genFn){
    return Promise((resolve,reject)=>{
        const gen=genFn();//生成迭代器对象
        function setUp(nextFn){
            let next;
            try{
                next=nextFn();  
            }catch(e){
                reject(e)
            }
            if(next.done){
                return resolve(next.value);
            }
            new Promise.resolve(next.value).then((v)=>{
                setUp(()=>gen.next(v))
            },(e)=>{
                setUp(()=>gen.throw(e))
            })
        }
        setUp(()=>gen.next(undefined))
    })
}

//将BC组装成一个新类返回
class A extends min(B,C){

}

function throttle(){
   return function(){

   }
}

function debounce(){

}

function curry(fn){
    let allArguments=[];
    return function(){
        allArguments.push(allArguments)
    }
}

