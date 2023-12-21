const User = require('../entities/user');

class SignupUseCase{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute(data){
        try{
            const user = new User(data);
            if(await this.userRepository.findByEmail(data.email) == null){
                return this.userRepository.save(user);
            }
            return "Already exist"
        }catch(err){
            console.log(err)
            return err
        }

    }

}

module.exports = SignupUseCase;