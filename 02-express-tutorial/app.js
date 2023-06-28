const express = require('express');
const app = express();
let {products, people} = require('./data.js');
const peopleRouter = require('./routes/people.js')


app.use(logger);
function logger(req, res, next) {
    const url = req.url;
    console.log(url);
    console.log('log');
    next();
}

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/v1/people', peopleRouter)


app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
      return res.status(200).send(`Welcome ${name}`)
    }
  
    res.status(401).send('Please Provide Credentials')
    
})

app.get('/', logger, (req,res) =>{
    res.send('<h1>HOme page</h1>')
})
app.get('/api/v1/test', (req,res) =>{
    res.json({message: 'It worked!'})
})
app.get('/api/v1/products', (req,res) =>{
    res.json(products)
})

app.get('/api/v1/products/:productID', (req,res)=>{
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
    
    if (!singleProduct){
        return res.status(404).send('product does not exist')
    };

    return res.json(singleProduct);
    
})

app.get('/api/v1/query', (req,res) =>{
    const {search, limit, lessThen} = req.query
    let sortedProducts = [...products]
    console.log(sortedProducts);
    console.log(lessThen);

    if(lessThen){
        sortedProducts = sortedProducts.filter((products) => {
            return products.price < Number(lessThen);
        })     
    }
   
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({success:true, data: []})
    }
    
    res.status(200).json(sortedProducts);

    console.log(req.query);
    
})




app.all('*', (req, res) =>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, ()=>{
    console.log('serveris listening on port 5000');
})