//实现一个Promise

const PENDDING = "PENDDING"; // 初始化pendding状态
const RESOLVED = "RESOLVED"; // 正确完成resolve状态
const REJECTED = "REJECTED"; // 错误完成reject状态

class MyPromise{
    constructor(executor){
        //初始化状态
        this.status=PENDDING;
        //resolve返回的值
        this.value=undefined;
        //reject返回的错误信息
        this.errorInfo=undefined;
        //成功和失败的回调队列
        this.resovles=[];
        this.rejects=[];
        //success回调
        const resovle=(value)=>{
            if(this.status===PENDDING){
                this.status=RESOLVED;
                this.value=value;
                //执行resolve队列中的回调
                while(this.resovles.length){
                    const callback=this.resovles.shift();
                    callback(value);
                }
            }
        }
        //failed回调
        const reject=(errorInfo)=>{
            if(this.status===PENDDING){
                this.status=REJECTED;
                this.errorInfo=errorInfo;
                //执行rejects队列中的回调
                while(this.rejects.length){
                    const callback=this.rejects.shift();
                    callback(errorInfo);
                }
            } 
        }
        try {
            executor(resovle,reject)
        } catch (error) {
            reject(error);
        }
    }
    then(resovle,reject){

        typeof resovle!== 'function' ? resovle=value=>value:resovle;
        typeof reject !== 'function' ? reject = reason =>{
            throw new Error(reason instanceof Error ? reason.message : reason ) 
        } :reject;
        return new MyPromise((resovleFn,rejectFn)=>{
            const fulfilished=value=>{
                try {
                    const res=resovle(value)//执行resovle并获取返回的值
                    //判断返回的值是否为Promise，不同方式回调resovleFn函数
                    res instanceof MyPromise ? res.then(resovleFn,rejectFn) : resovleFn(res)
                } catch (error) {
                    rejectFn(error)
                }
            }
            // 重写传入的reject方法
            // 判断返回值
            const rejected = reason => {
                try{
                    // 接收返回值
                    const res = reject(reason)
                    // 判断返回值类型：promise或普通类型
                    // 如果是promise，则往下执行一次then
                    // 如果是普通类型，则直接执行rejectFn，保证value是最新值
                    res instanceof MyPromise ? res.then(resolveFn,rejectFn) : rejectFn(res)
                }catch(e){
                    rejectFn(e instanceof Error ? e.message: e)
                }

            }
            // 判断同步异步任务
            // 执行相对应的方法
            // 这里用switch方法改进
            switch(this.status) {
                case RESOLVED:
                    fulfilished(this.value)
                break;

                case REJECTED:
                    rejected(this.errorInfo)
                break;

                case PENDDING:
                    this.resovles.push(fulfilished)
                    this.rejects.push(rejected)
                break;
            }       
        })
        
    }
    // catch(){

    // }
}
let i=0;
let promise=new MyPromise((resovle)=>{
      setTimeout(()=>{
          resovle(i++);
      },3000)
});

promise.then((res)=>{
    console.log(res);
    return new MyPromise((resovle)=>{
        setTimeout(()=>{
            resovle(i++);
        },3000)
  });
    // return promise;
}).then(res=>{
    console.log(res);
})