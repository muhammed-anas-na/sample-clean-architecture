const User = require('../../../entities/user');
const userModel = require('../models/user-model')
const sanitize = require('sanitize-html')
const asyncHandler = require('express-async-handler')

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

  sanitize(data){
    if(!data.first_name){
      throw new Error("User should have a first name")
    }else{
      const first_name_regex = /^[A-Z][a-zA-Z]{3,}$/
      if(!first_name_regex.test(data.first_name)){
        throw new Error("Invalid first name")
      }
    }
    if(!data.last_name){
      throw new Error("User should have a last name")
    }else{
      const last_name_regex = /^[A-Z][a-zA-Z]{3,}$/
      if(!last_name_regex.test(data.last_name)){
        throw new Error("Invalid last name")
      }
    }
    if(!data.email){
      throw new Error("User should have a email")
    }else{
      const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(!email_regex.test(data.email)){
        throw new Error("Invalid email")
      }
    }
    if(!data.phone){
      throw new Error("User should have phone")
    }else{
      const phone_regex = /^\d{10}$/
      if(!phone_regex.test(data.phone)){
        throw new Error("Phone number is not valid")
      }
    }
    if(!data.password){
      throw new Error("User should have password")
    }else{
      const password_regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
      if(!password_regex.test(data.password)){
        throw new Error("Password not valid")
      }
    }
  }

  async findByCredentials(username, password) {
    // Implement logic to find the user by credentials in MongoDB
  }


}

module.exports = UserRepository;