function* readChar(str){
    for(let i=0;i<str.length;i++){
        yield str[i];
    }
    return;
}
let reader=readChar('Hello World');
console.log(reader.next().value)
console.log(reader.next().value)

//或者
for(let a of reader){
    console.log(a);
}
const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    reject()
    console.log(2);
})

promise.then(() => {
    console.log(3);
},() => {
    console.log("失败的状态")
})

console.log(4);

//1,2,4,3