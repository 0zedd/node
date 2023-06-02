// const express = require('express');

// const app =  express();

// app.get('/', (req,res)=>{
//   console.log('user clicked')
//   res.status(200).send('Homepage')
// })

// app.get('/about', (req,res)=>{
//   res.status(200).send('About page');
// })

// app.all('*', (req,res)=>{
//   res.status(404).send('<h1>page not fofund</h1>')
// })


// app.listen(5000, ()=>{
//   console.log('listerning on port 5000')
// })


// const express = require('express');
// const path = require('path');

// const app = express();

// app.use(express.static('./public'))


// app.get('/', (req,res)=>{
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

// app.all('*', (req,res)=>{
//   res.status(200).send('not found resource')
// })



// app.listen(3000, ()=>{
//   console.log('listerning on port 3000')
// })


// const express = require('express');
// const app = express();
// const {products} = require('./data');

// app.get('/', (req,res)=>{
//   res.send('<h1>Welcome to homepage</h1><a href="/api/products">Click here to go to the api</a>')
// })

// app.get('/api/products/', (req,res)=>{
//     const newProducts = products.map((products)=>{
//     const {id,name,image,price} = products
//     return {id,name,image,price}
//   })
//   res.json(newProducts)
// })

//     // find products by id with route params meth
// app.get('/api/products/:productID', (req,res)=>{  
//     const {productID} = req.params
//     const singleProduct = products.find((prod)=> prod.id === Number(productID))

//     if(!singleProduct){
//       return res.status(404).send('product not found')
//     }
//   return res.json(singleProduct)
// })

//       // search by produciong the names sorted products with querystring 
// app.get('/api/v1/query/', (req,res)=>{
//   // console.log(req.query)
//   const { search,limit } = req.query;
//   let sortedProducts = [...products]

//   if(search){
//     sortedProducts = sortedProducts.filter((prod)=>{
//       return prod.name.startsWith(search)
//     })
//   }

//   if(limit){
//     sortedProducts = sortedProducts.slice(0, Number(limit))
//   }

//   if(sortedProducts.length < 1){
//     return res.status(200).json({ sucess: true, data:[]})
//   }

//   res.status(200).json(sortedProducts)
// })



// app.listen(3000,()=>{
//   console.log(' server listerning on port 3000')
// })