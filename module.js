// const call = require('./namemodule');

// const sayHi = require('./funxmodule')

// require('./bombmodule');

// sayHi('Bigmen');
// sayHi(call.person1);
// sayHi(call.person2);

// // os module
// const os = require('os');
// const user = os.userInfo()
// console.log(user)

// console.log(`this is your pc uptime in miliseconds ${os.uptime()}`)

// const fullinfo = {
//   name:os.userInfo(),
//   type:os.type(),
//   mem:os.totalmem(),
//   win:os.cpus(),
//   speed:os.release(),
// }
// console.log(fullinfo)



// path module
// const path = require('path')

// const filePath = path.join('./contents', 'subcontents', 'test.txt')

// console.log(filePath)

// const base = path.basename(filePath);

// console.log(base);

// const res = path.resolve(filePath);
// console.log(res)


// fs module sync

// const{readFileSync, writeFileSync} = require('fs');
// console.log('start')
// const first = readFileSync('./contents/firstfile.txt', 'utf8');
// const second = readFileSync('./contents/secondfile.txt', 'utf8');


// writeFileSync('./contents/newfile.txt',
//  `Hi new file contents, ${first} and ${second}`,
//  { flag:'a'},
// )
// console.log('done with task')
// console.log('starting next task')

// fs module async
// const{readFile, writeFile} = require('fs');

// console.log('start')
// readFile('./contents/firstfile.txt','utf-8', (err, result)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile('./contents/secondfile.txt','utf8',(err, result)=>{
//     if(err){
//       return;
//     }
//     const second = result;
//     writeFile('./contents/asyncfs.txt', 
//     `Hi new asyncfile contents:, ${first} and ${second}`,
//     { flag:'a'},(err, result)=>{
//       if(err){
//         console.log(err)
//         return;
//       }
//       console.log('done with task')
//     })
//   })
// })
// console.log('starting new task')


// http module

// const http = require('http');

// const server = http.createServer((req,res)=>{
//   if(req.url === '/'){
//     res.end('welcome to the homepage')
//   }
//   if(req.url === '/about'){
//     res.end('welcome to the aboutpage')
//   }
//   if(req.url === '/history'){
//     res.end('welcome to the historypage')
//   }
//   res.end(`<h1>OOOpppsss no such page ehhhh</h1>
//     <a href="/">back to hompage</a>
//   `)
// })

// server.listen(5000);

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to the homepage');
    return;
  }
  if (req.url === '/about') {
    res.end('welcome to the aboutpage');
    return;
  }
  if (req.url === '/history') {
    res.end('welcome to the historypage');
    return;
  }
  res.end(`
    <h1>OOOpppsss no such page ehhhh</h1>
    <a href="/">back to homepage</a>
  `)
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
