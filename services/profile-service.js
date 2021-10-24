const Profile = require("../models/index")['Profile'];
const User = require("../models/index")['User'];

class ProfileService {
    
    async createProfile(profile){
        return await Profile.create(profile);
    }

    async getAll(){
        return await Profile.findAll({
            include: [
                {
                    model: User,
                    as: 'user', 
                },
            ],
        });
    }


}



