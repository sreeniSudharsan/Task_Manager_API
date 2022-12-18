require('./db/connect')
const express = require('express');
const app = express() 
const tasks = require('./routers/tasks')
const connectDB = require('./db/connect');
require('dotenv').config()
//middleware

app.use(express.json())
app.use(express.static('./public'))

//routes
app.use('/api/v1/tasks', tasks)



//app.get('/api/v1/tasks)
//app.post('/api/v1/tasks)
//app.get('/api/v1/tasks/:id)
//app.patch'/api/v1/tasks/:id)
//app.delete('/api/v1/tasks/:id)

const port = 5000;

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