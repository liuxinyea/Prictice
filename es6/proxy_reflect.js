let user={
    _name:"Guest",
    get name(){
        return this._name;
    }
}

let userProxy=new Proxy(user,{
    get(target,prop,receiver){
        // console.log(target);
        // console.log(receiver);
        return Reflect.get(...arguments);
    }
})
let admin={
    _name:"Admin"
}
Object.setPrototypeOf(admin,userProxy)
console.log(admin.name);