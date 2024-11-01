
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
 
// const imp = require('./example');
// console.log(imp);


// require('./example')


// const s = require('./a')
// // console.log(a)
// console.log(s)


// const fs = require("fs")

// fs.writeFileSync('./text.txt','hello im new file')

// fs.writeFile('./text.txt','hello new file', (err)=>{err})


// // read file

// fs.readFileSync('./text.txt','utf-8')

// fs.readFile('./text.txt','utf-8',
//     (err,data)=>{
//         if(err){
//             console.log('this is err :' , err);
//         }
//         console.log('this is data :' , data);
//     }
// )

// fs.accessSync('./text.txt')


// blocking and non blocking
// blocking - sync , non-blocking - async

// const os = require('os');
// console.log(os.cpus().length)

// blocking 
// const fs = require('fs');

// fs.writeFileSync('./contact.txt', 'a: +908700')

// fs.writeFileSync('./contact.txt','b:+0865090090')

// const r = fs.readFileSync('./contact.txt','utf-8')
// console.log(r)

// non blocking

// const fs = require('fs');
// const r = fs.readFile('./contact.txt','utf-8', (err,result) =>{
//     console.log(result);
// })





const os = require('os');
const hostname = os.hostname();
const platform = os.platform();
const x = os.cpus();
console.log(hostname)
console.log(platform)
console.log(x)