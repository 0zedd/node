const {writeFileSync} = require('fs');
for(let i=0; i < 10000; i++){
  writeFileSync('./contents/bigfile.txt', `This is a big file ${i}`, {flag: 'a'})
}