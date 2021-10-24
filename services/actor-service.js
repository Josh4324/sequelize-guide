const Actor = require("../models/index")['Actor'];
const User = require("../models/index")['User'];

class ActorService {
    
    async createActor(actor){
        return await Actor.create(actor);
    }

}
