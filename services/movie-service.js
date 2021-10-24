const Movie = require("../models/index")['Movie'];
const Actor = require("../models/index")['Actor'];
const User = require("../models/index")['User'];

class MovieService {
    
    async createMovie(movie){
        return await Movie.create(movie);
    }

    async findOneMovie(id){
        return await Movie.findOne({
    where : {
        id
    },
    include: [
        {
            model: Actor,
            as: 'actors', 
        },
    ],
    })
    }

    async findAll(){
        return await Movie.findAll({
        include: [
            {
                model: Actor,
                as: 'actors', 
            },
        ],
    })
    }


}


