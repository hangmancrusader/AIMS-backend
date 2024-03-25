// UseCases for User Administration done by a Root/Other Role
const HostingRepository = require('../../infrastructure/repository/HostingRepository.js');
const Hositng = require('../../entitities/Hosting.js')
class HostingUseCases {

  constructor()
  {
    this.hostingRepository = new HostingRepository();
  }

  async addHosting(hostingData) {
    // Log the userData object
    console.log(hostingData);
    // Logic to add a new user
    const newHost = new Hositng(hostingData);
    await this.hostingRepository.addHosting(newHost);
    return newHost;
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

module.exports = HostingUseCases;





  