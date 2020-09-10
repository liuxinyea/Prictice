class Dep{
   static target=null
   constructor(){
       this.subs=[];
   }
   addSubs(watcher){
       this.subs.push(watcher)
   }
   notify(newVal){
       for(let i=0;i<this.subs.length;i++){
           this.subs[i].update(newVal);
       }
   }
}
class Observer{
    constructor(data){
       if(typeof data=='object'){
           this.walk(data);
       }
    }
    walk(obj){
        const keys=Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            this.defineReactive(obj, keys[i])
        }
    }
    defineReactive(obj,key){
        if(typeof obj[key]=='object'){
            this.walk(obj[key]);
        }
        const dep=new Dep();
        const val=obj[key];
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            //get代理将Dep.target即Watcher对象添加到依赖集合中
            get: function reactiveGetter () {
              if (Dep.target) {
                dep.addSubs(Dep.target);
              }
              return val;
            },
            set: function reactiveSetter (newVal) {
                dep.notify(newVal)
            } 
          })
    }
}
let uid=0
let waiting=false;
class Watcher{
    constructor(vm,key,cb){
       this.vm=vm;
       this.uid=uid++;
       this.cb=cb;
       //调用get，添加依赖
       Dep.target=this;
       this.value=vm.$data[key];
       Dep.target=null;
    }
    update(newValue){
        if(this.value!==newValue){
            this.value=newValue;
            if(!waiting)//控制变量，控制每次事件循环期间只添加一次flushUpdateQueue到callbacks
            this.vm.$nextTick(this.vm.flushUpdateQueue); 
            //不是立即执行run方法，而是放入updateQueue队列中
            if(!has[this.uid]){
                has[this.uid]=true;
                updateQueue.push(this);
            }
        }
    }
    run(){
        this.cb(this.value);
    }
}
 const updateQueue=[];//数据变更队列
 const has={};//控制变更队列中不保存重复的Watcher
 const callbacks=[];
 let pending=false;
class Vue{
   constructor(options){
       this.$el=options.el;
       this._data=options.data;
       this.$data=this._data;
       this.$nextTick=this.nextTick;
       new Observer(this._data);
   }
   //简易版nextTick
   nextTick(cb){
        callbacks.push(cb);
        if(!pending){//控制变量，控制每次事件循环期间只执行一次flushCallbacks
            pending=true;
            setTimeout(()=>{
                //会在同步代码（上一次宏任务）执行完成后执行
                this.flushCallbacks();
            })
        }
    }
   //清空UpdateQueue队列
   flushUpdateQueue(){
       while(updateQueue.length!=0){
          updateQueue.shift().run();
       }
       waiting=false;
   }
   //清空callbacks
   flushCallbacks(){
      while(callbacks.length!=0){
        callbacks.shift()();
     }
     pending=false;
   }
}
//======测试=======
let data={
    message:'hello',
    num:0
}
let app=new Vue({
    data:data
});
//模拟数据监听
let w1=new Watcher(app,'message',function(value){
    //模拟dom变更
    console.log('message 引起的dom变更--->',value);
})
//模拟数据监听
let w2=new Watcher(app,'num',function(value){
    //模拟dom变更
    console.log('num 引起的dom变更--->',value);
})
data.message='world'
data.message='world1'
data.message='world2'
for(let i=0;i<=100;i++){
   data.num=i;
}
app.$nextTick(function(){
   console.log('这是dom更新完成后的操作')
})