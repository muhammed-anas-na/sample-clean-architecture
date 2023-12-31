const SignupUseCase = require('../../../use_cases/signup');
const LoginUseCase = require('../../../use_cases/login');

const UserRepository = require('../repositories/userRepository');


const userRepository = new UserRepository();
const signupUseCase = new SignupUseCase(userRepository);
const loginUseCase = new LoginUseCase(userRepository);


module.exports = {
    signup:async(req,res,next)=>{
        try{
            let data = await signupUseCase.execute(req.body);
            res.status(201).json({message:data})
        }catch(err){
            console.log("Catch block of signup controller ==>" , err.message)
            next(err)
        }
    },

    login:async(req,res)=>{
        const {username , password} = req.body;
        try{
            const user = await loginUseCase.execute(username,password);
            res.json({message:"Login success" , user})
        }catch(err){
            res.status(401).json({error:"Invalid creadentials"})
        }
    },
    
    getProfile:(req,res)=>{
        const user = req.user;
        res.json({message:'Profile retrieved successfully' , user});
    },


    sanitize:(data)=>{
        console.log(data)
        return sanitize(data)
    }

}