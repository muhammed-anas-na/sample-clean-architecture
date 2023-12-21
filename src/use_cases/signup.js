const User = require('../entities/user');

class SignupUseCase{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute(data){
        try{
            const user = new User(data);
            await this.userRepository.sanitize(data)
            if(await this.userRepository.findByEmail(data.email) == null){
                return this.userRepository.save(user);
            }
            return "Already exist"
        }catch(err){
            console.log("This is catch block in execute ==>",err)
            throw new Error(err)
        }

    }

}

module.exports = SignupUseCase;