const express = require('express')
const app = express()
const tasks = require('./routess/task.js')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found.js')
const errorHandlerMiddleWare = require('./middleware/error-handler.js')
app.use(express.static('./public'))
app.use(express.json())


app.get('/hello', (req,res) => {
    res.send('task manager app')
})

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleWare)



const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()