// if the Closure's content consists of only one expression,
// you can wirte it more succinctly

var minus = (a:number,b:number) => a - b;

var result = minus(100,200);
console.log(`result = ${result}`);

//Create a Closure
var sayBye = (name:string) => console.log(`Bye ${name}`);
sayBye('Karl');

