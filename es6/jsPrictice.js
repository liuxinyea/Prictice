/*
 * @Author: liuxinye
 * @Date: 2020-03-30 14:27:35
 * @LastEditors: liuxinye
 * @LastEditTime: 2020-04-23 07:37:37
 * @Description: 
 */
let observer_ids=0;
let observed_ids=0;
class  Observer {
   constructor() {
      this.id = observer_ids++;
   }
   update(ob){
      console.log("观察者" + this.id + `-检测到被观察者${ob.id}变化`);
   }
}
class Observed {
   constructor() {
      this.observers = [];
      this.id=observed_ids++;
   }
   addObserver(observer) {
      this.observers.push(observer);
   };
   removeObserver(observer) {
      this.observers = this.observers.filter(o => {
         return o.id != observer.id;
      });
   };
   notify(ob) {
      this.observers.forEach(observer => {
         observer.update(ob);
      });
   };
}
//发布者
class Pub{
   constructor(dispatcher){
       this.dispatcher=dispatcher;
       this.id=observed_ids++;
   }
   /**
    * @description: 发布方法
    * @param {type} 通知类型
    */
   publish(type){
      this.dispatcher.publish(type,this)
   }
}
//订阅者
class Subscriber{
    constructor(dispatcher){
      this.dispatcher=dispatcher;
      this.id=observer_ids++;
    }
    subscribe(type){
       this.dispatcher.subscribe(type,this);
    }
    doUpdate(type,arg){
        console.log("接受到消息"+arg)
    }
}
//调度中心
class Dispatcher{
   constructor(){
      this.dispatcher={};
   }
   subscribe(type,subscriber){
      if(!this.dispatcher[type]){
         this.dispatcher[type]=[];
      }  
      this.dispatcher[type].push(subscriber);
   }
   unsubscribe(type, subscriber) {
      let subscribers = this.dispatcher[type];
      if (!subscribers || !subscribers.length) return;
      this.dispatcher[type] = subscribers.filter(item =>{ 
         return item.id !== subscriber.id
      });
  }
  publish(type, args) {
      let subscribers = this.dispatcher[type];
      if (!subscribers || !subscribers.length) return;
      subscribers.forEach(subscriber=>{
         subscriber.doUpdate(type,args);
      });        
   }
}
class Reader extends Subscriber{
   constructor(name,dispatcher){
      super(dispatcher);
      this.name=name;
   }
    doUpdate(type,st){
      //   super.update(st);
        console.log(this.name+`阅读了--${type}--公众号的文章`);
    }
}
class WeiX extends Pub{
    constructor(name,dispatcher){
       super(dispatcher);
       this.name=name;
    }
    publishArticle(type){
       this.publish(type)
    }
}

let dispatcher=new Dispatcher();
//公众号
let wei1=new WeiX("前端",dispatcher);
let wei2=new WeiX("数据库",dispatcher);
//读者们
let reader1=new Reader("小玲",dispatcher);
let reader2=new Reader("小明",dispatcher);
let reader3=new Reader("小李",dispatcher);
//读者订阅公众号
reader1.subscribe("前端");
reader2.subscribe("数据库");
reader3.subscribe("数据库");
//公众号发布文章
wei1.publishArticle("前端");
wei1.publishArticle("数据库");
