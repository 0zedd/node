const EventEmitter = require('events');

const myEmitter = new EventEmitter()

myEmitter.on('response', ()=>{
  console.log('data recieved')
})

myEmitter.emit('response')