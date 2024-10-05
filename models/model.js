const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({ // craeting the schema
   name:{
       type:String,
       required:true
    },
    img:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    genre:{
        type:[String],
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('movie', movieSchema) //syntax to create model first paramter is the name of mode and second is the defined schema