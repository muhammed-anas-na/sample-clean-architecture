const User = require('../../../entities/user');
const userModel = require('../models/user-model')

class UserRepository {
  async save(user) {
    // Implement logic to save the user to MongoDB
    let newUser = new userModel({
      first_name:user.first_name,
      last_name:user.last_name,
      email:user.email,
      phone:user.phone,
      alt_number:user.alt_number,
      password:user.password

    })
    try{
      await newUser.save()
      return{
        status:"Account created",
        user
      }
    }catch(err){
      return err;
    }
    
  }
  async findByEmail(email){
    return await userModel.findOne({email:email});
  }

  async findByCredentials(username, password) {
    // Implement logic to find the user by credentials in MongoDB
  }
}

module.exports = UserRepository;