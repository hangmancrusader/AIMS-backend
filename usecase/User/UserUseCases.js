// UseCases for User Administration done by a Root/Other Role
const UserRepository = require("../../infrastructure/repository/UserRepository.js");
const User = require("../../entitities/User.js");
class UserUseCases {
  constructor() {
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
    const error = await this.userRepository.updateUser(userId, userData);
    console.log(error);
    return error;
  }

  /* async login(email, password) {
    // Logic to authenticate a user
    
    const {currentpassword} = await this.userRepository.getUserByEmail(email);
    if(currentpassword === password) {
      return currentpassword;
    }
    else{
      throw new Error('Invalid email or password');
    }
  }//end of login*/
  async logout(email) {
    //logout if current password is valid/notnull
    const { currentpassword } = await this.userRepository.getUserByEmail(email);
    if (currentpassword) {
      return true;
    } else {
      return false;
    }
  } //end of login

  async resetPassword(id, data) {
    console.log(data);
    return await this.userRepository.resetPassword(id, data);
  }
}

module.exports = UserUseCases;
