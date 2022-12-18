const mongoose = require('mongoose')

//This is the schema for the database, or if you could put it, the columns of the database(but they are not columns since its not relational)
//Here we see two parts, exporting the validated schema(validation as in restriction on the type) as Task

const TaskSchema = new mongoose.Schema({
    name:{
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'Name cannot be more than 20']
},
    completed:{
        type:Boolean,
        default: false}
})





module.exports = mongoose.model('Task', TaskSchema)