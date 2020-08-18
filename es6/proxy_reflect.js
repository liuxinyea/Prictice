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
        console.log(target[prop]);
        console.log(target)
        return Reflect.get(target,prop,receiver);
        console.log()
        return target[prop]
    }
})
let admin={
    _name:"Admin"
}
Object.setPrototypeOf(admin,userProxy)
console.log(admin.name);