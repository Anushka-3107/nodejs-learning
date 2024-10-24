
// const sum = require("./sum")

// const add = sum(5,6);
// console.log(add);


// console.log('hello');


// const path = require('path');
// console.log(path.basename(__dirname))

// console.log(path.join('/hello','/world','/file.txt'))

// const fs = require('fs')


// fs.readFile('file.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data)
// })


// console.log(fs.readFileSync('file.txt','utf-8'))

// fs.writeFileSync('file.txt','hello world',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('new lines added');
// })

// event , event loop

// function f1(){
//     console.log('i am f1')
//     f3();
// }

// function f2(){
//     console.log('i am f2')
//     f1();
// }

// function f3(){
//     console.log('i am f3')
// }

// f2();



// const fs = require('fs');

// fs.readFile(__filename,()=>{
//     console.log('hello im file')
// })

// process.nextTick(()=>{
//     console.log('hello im tick')
// })

// Promise.resolve().then(()=>{
//     console.log('im promise')
// })


// const imp = require("./add");
// console.log(imp.d);

const imp = require('./example');
console.log(imp);
