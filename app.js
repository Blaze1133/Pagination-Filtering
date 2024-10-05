require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();


const apiRouter = require('./routes/products');
app.use('/movies', apiRouter);

const connectDb = require('./Db/connection');


async function start(){
    try{
        await connectDb(process.env.CONNECTION_STRING);
        console.log("db connected");
        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`);
        });
        
    }catch(err){
        console.log(err);
    }
}


start();

