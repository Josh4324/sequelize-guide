const Profile = require("../models/index")['Profile'];
const User = require("../models/index")['User'];
const Cars = require("../models/index")['Cars'];

class CarService {
    
    async createCar(car){
        return await Cars.create(car);
    }

    async getAll(){
        return await Cars.findAll({
            include: [
                {
                    model: User,
                    as: 'user', 
                },
            ],
        });
    }


}

