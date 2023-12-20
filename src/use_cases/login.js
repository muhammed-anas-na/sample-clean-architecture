class LoginUseCase{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute(username , password){
        return this.userRepository.findByCredentials(username,password);
    }
}
module.exports = LoginUseCase