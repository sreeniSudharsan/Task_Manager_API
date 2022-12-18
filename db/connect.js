const mongoose = require('mongoose')

const connectDB = (url) => {
//This is because, we're using v5 which is an older version, just for the sake of 
//knowing how to handle deprecation warnings. In v6, these warnings will be inexistant
return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true})
    
}

module.exports = connectDB