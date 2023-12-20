const User = require('../entities/user');

class SignupUseCase{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute(username , password){
        const user = new User(username,password);
        return this.userRepository.save(user);
    }

}

module.exports = SignupUseCase;