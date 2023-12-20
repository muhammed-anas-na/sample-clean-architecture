const User = require('../../../entities/user');


class UserRepository {
  async save(user) {
    // Implement logic to save the user to MongoDB
  }

  async findByCredentials(username, password) {
    // Implement logic to find the user by credentials in MongoDB
  }
}

module.exports = UserRepository;
