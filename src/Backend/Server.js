const express = require("express")
const cors= require('cors')
const mongoose =  require('mongoose');

require('dotenv').config()

const app = express()

//for Middle ware
app.use(cors());

//for MongoDB Configs and Connection
const mongoURI=process.env.mongoURI;
const mongoEssentials= {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true};

mongoose.connect(mongoURI,mongoEssentials,(error)=>{
    if(error){
        return console.log(error);
    }
    return console.log("Connection to MongoDb was successful");
})

//Routes Entry Point
app.use(require('./Routes/Auth.js'));


//Server Configs And Connection
const PORT =process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server runs at port: ${PORT}`);
})



