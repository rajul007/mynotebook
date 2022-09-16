const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://rajulgarg07:iamthebest@cluster0.fwbbxfe.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;