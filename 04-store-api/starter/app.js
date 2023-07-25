require('dotenv').config()
require('express-async-errors')

const express = require('express');
const app = express();

const connectDB = require('./db/connect.js')
const productsRouter = require('./routes/products.js')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

app.use(express.json())



app.get('/', (req,res) => {
    res.send('<h1>store API</h1><a href="/api/v1/products">products routes</a>')
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        app.listen(port, console.log(`server is listening port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()