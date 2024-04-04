// UseCases for User Administration done by a Root/Other Role
const HostingRepository = require('../../../infrastructure/repository/HostingRepository.js');
const Hositng = require('../../../entitities/Hosting.js')
class HostingUseCases {

  constructor()
  {
    this.hostingRepository = new HostingRepository();
  }

  async add(hostingData) {
    // Log the userData object
    console.log(hostingData);
    // Logic to add a new user
    const newHost = new Hositng(hostingData);
    const id = await this.hostingRepository.addHosting(newHost);
    return {newHost,id};
  }

  async get(Id) {
    console.log(Id);
    return await this.hostingRepository.getUser(Id);
  }


  async getAll() {
    return await this.hostingRepository.getAll();
  }

  async delete(Id) {
    await this.hostingRepository.deleteUser(Id);
  }

  async update(Id, Data) {
    // Logic to update a user
    await this.hostingRepository.update(Id, Data);
  }

}

module.exports = HostingUseCases;





  