const Movie = require('../models/model');
const movies = require('../config/movies');


const filteredResults = async (req, res) => {
    
    const search = String(req.query.search);
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;   //line of code is calculating the number of items to skip in a pagination scenario.
    const sort = req.query.sort || "rating"
    
    const movie = await Movie.find({name: {$regex:`${search}+`, $options: 'i'}}).skip(skip).limit(limit).sort({[sort]: 1});

    


    res.status(200).json({movie,nbHits: movie.length});

}

// const inseretData = async () => {
//     await Movie.insertMany(movies);
//     console.log("inserted the movies data");
    
// }

// inseretData();

module.exports = {filteredResults};