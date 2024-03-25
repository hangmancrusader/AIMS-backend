// UseCases for User Administration done by a Root/Other Role
const DBRepository = require('../../infrastructure/repository/DatabaseRepository.js');
const DB = require('../../entitities/Database.js')
class DatabaseUseCases {

  constructor()
  {
    this.dbRepository = new DBRepository();
  }

  async addDB(dbData) {
    // Log the userData object
    console.log(dbData);
    // Logic to add a new user
    const newDB = new User(dbData);
    await this.dbRepository.addDB(newDB);
    return newDB;
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

module.exports =DatabaseUseCases;





  