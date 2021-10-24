const User = require("../models/index")['User'];
const Profile = require("../models/index")['Profile'];
const Cars = require("../models/index")['Cars'];

class UserService {

    async createUser(user){
        return await User.create(user);
    }
    
    async findByPk(userId){
        return await User.findByPk(userId);
    }

    async findAll(){
        return await User.findAll({
            include: [
                {
                    model: Profile,
                    as: 'profile', 
                },
                {
                    model: Cars,
                    as: 'cars', 
                },
            ],
        });
    }


}
