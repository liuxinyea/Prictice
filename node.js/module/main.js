
/*
* exports和require
* */
let Hello=require('./hello');

let hello=new Hello();

hello.setWord("word");

hello.sayWord();