const loginUseCase = require('../use_cases/login')
const signupUseCase = require('../use_cases/signup');


const userRepository = require('../adapters/express/repositories/userRepository');


const useCase = {
    loginUseCase,
    signupUseCase,
}

const repository = {
    userRepository
}

export default {useCase , repository};
