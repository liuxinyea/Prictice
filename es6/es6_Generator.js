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