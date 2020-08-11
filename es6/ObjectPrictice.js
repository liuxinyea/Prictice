
var person={};
Object.defineProperty(person,"name",{
   configurable:true,
   // writable:true,
   // enumerable:true,
   value:"liuxinye"
});
Object.defineProperty(person,"name",{
    // configurable:false,
    writable:true,
    // enumerable:true,
    value:"liuxinye"
});
console.log(person.name);
person.name="xujiahua";
console.log(person.name);
