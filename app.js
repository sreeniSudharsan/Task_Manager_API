const express = require('express');
const app = express() 
const tasks = require('./routers/tasks')
const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
require('dotenv').config()

//middleware

app.use(express.json())
app.use(express.static('./public'))


//routes
app.use('/api/v1/tasks', tasks)


//Pass the error handler middleware here
app.use(notFound)
app.use(errorHandlerMiddleware)

//app.get('/api/v1/tasks) - get all tasks
//app.post('/api/v1/tasks)  - post one task
//app.get('/api/v1/tasks/:id) - get single task
//app.patch'/api/v1/tasks/:id) - update a task
//app.delete('/api/v1/tasks/:id) - delete a task

const port = process.env.PORT || 3000

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI) //this invokes the config variable that we stored in the .env file 
        app.listen(port, ()=> {console.log(`Server listening on ${port}...`)
})
    }
    catch(error){
        console.log(error);
    }
}

start()