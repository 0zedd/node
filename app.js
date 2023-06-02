const express = require('express');
const app = express();
const popleRouter = require('./routes/people')
const auth = require('./routes/auth')


// static asset
app.use(express.static('./methods-public'));

// parse the form
app.use(express.urlencoded({extended:false}));

// middleware to access js json
app.use(express.json())
// base route
app.use('/api/people', popleRouter)
app.use('/login', auth)



app.listen(3000,()=>{
  console.log(' server listerning on port 3000')
})
