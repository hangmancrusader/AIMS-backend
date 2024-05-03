// UseCases for User Administration done by a Root/Other Role
const UserRepository = require('../../infrastructure/repository/UserRepository.js');
const User = require('../../entitities/User.js')
class UserUseCases {

  constructor()
  {
    this.userRepository = new UserRepository();
  }

  /*async addUser(userData) {
    // Log the userData object
    console.log(userData);
    // Logic to add a new user
    const newUser = new User(userData);
    return await this.userRepository.addUser(newUser);
    //return newUser;
  }*/

  async addUserwithPic(userData) {
    // Log the userData object
    console.log(userData);
    // Logic to add a new user
    const newUser = new User(userData);
    return await this.userRepository.addUserwithPic(newUser);
    //return newUser;
  }

  async getUser(userId) {
    console.log(userId);
    return await this.userRepository.getUser(userId);
  }


  async getAllUsers() {
    return await this.userRepository.getAllUsers();
  }

  async deleteUser(userId) {
    await this.userRepository.deleteUser(userId);
  }

  async updateUser(userId, userData) {
    // Logic to update a user
    await this.userRepository.updateUser(userId, userData);
  }

  async login(email, password) {
    // Logic to authenticate a user
    
    const {currentpassword} = await this.userRepository.getUserByEmail(email);
    if(currentpassword === password) {
      return currentpassword;
    }
    else{
      throw new Error('Invalid email or password');
    }
  }//end of login
}

module.exports = UserUseCases;





  