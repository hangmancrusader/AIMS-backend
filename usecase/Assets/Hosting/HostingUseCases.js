// UseCases for User Administration done by a Roo
const HostingRepository = require('../../../infrastructure/repository/HostingRepository.js');
const Hosting = require('../../../entitities/Hosting.js')
class HostingUseCases {

  constructor()
  {
    this.hostingRepository = new HostingRepository();
  }

  async add(hostingData) {
    // Log the userData object
    console.log(hostingData);
    // Logic to add a new user
    const newHost = new Hosting(hostingData);
    const id = await this.hostingRepository.add(newHost);
    return {id};
  }

  async get(Id) {
    console.log(Id);
    return await this.hostingRepository.get(Id);
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





  