
const PENDING=0;
const RESOLVE=1;
const RJECT=2;

class MyPromise{
    constructor(executor){
        this.status=PENDING;
        this.value=null;
        this.error=null;
        this.promises=[];//all所需的Promise队列
        this.resoves=[];//resolve队列
        this.rejects=[];//reject队列
        const resove=(value)=>{
             if(this.status=PENDING){//状态机，只能PENDING->RESOLVE,只能PENDING->REJECT,
                this.status=RESOLVE;
                this.value=value;//给value赋值
                //异步调用成功，执行所有then方法加入到resolves中的回调函数
                while(this.resoves.length>0){
                   const callback=this.resoves.shift()
                   callback(value);
                }
             }
        };
        const reject=(error)=>{
            if(this.status=PENDING){//状态机，只能PENDING->RESOLVE,或者PENDING->REJECT,
                this.status=RJECT;
                this.error=error;
                //异步调用失败，执行所有then方法加入到rejects中的回调函数
                while(this.rejects.length>0){
                   const callback=this.rejects.shift()
                   callback(error);
                }
             }  
        };
        try {
            executor(resove,reject)
        } catch (error) {
            reject(error)
        }
    }
    then(resove,reject){
        //处理resolve和reject不是函数的情况
        resove instanceof Function?resove:resove=value=>value;
        reject instanceof Function?reject:reject=error=>error;
        //为了符合链式调用的规范，返回一个Mypromise对象
         return new MyPromise((resolveFn,rejectFn)=>{
            //封装一下resolve，处理resolve返回Promise的情况
            const fullfilish=(value)=>{
               const res=resove(value);//执行resolve并返回一个值
               //如果返回的是一个值，直接调用内部构造的Promise的resolveFn为value赋值，调用then方法可以直接回调此值，
               //如果是一个Promise对象，那么执行它的then方法，等待执行完成后回调resolveFn
               res instanceof MyPromise?res.then(resolveFn,rejectFn):resolveFn(res);
            }
            //同样封装一下reject
            const rejected=(error)=>{
                const res=reject(error);
                res instanceof MyPromise?res.then(resolveFn,rejectFn):rejectFn(res);
             }
            switch(this.status){
                case RESOLVE://executor任务是同步任务，执行then方法时，状态已经变为resolve或者reject，南无直接执行
                    fullfilish(this.value);
                case REJECTED: 
                    rejected(this.error)  
                case PENDING://executor任务是异步任务，把回调函数放入到回到队列中等待异步任务执行完毕执行resolve变更状态，然后执行事件队列
                    this.rejects.push(fullfilish);
                    this.resoves.push(rejected);
             }
         })
    }
    catch(){
        
    }
    all(){
       this.promises=arguments;
       return new MyPromise((resolveFn,rejectFn)=>{
             
       })
    }
}
