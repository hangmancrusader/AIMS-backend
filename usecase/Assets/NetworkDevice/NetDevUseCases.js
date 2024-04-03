// UseCases for User Administration done by a Root/Other Role
const NetDevRepository = require('../../../infrastructure/repository/NetDevRepository.js');
const NetDev = require("../../../entitities/NetworkDevice.js")
class NetDevUseCases {

  constructor()
  {
    this.netdevRepo = new NetDevRepository();
  }

  async add(Data) {
    
    console.log(Data);
    
    const newNetDev = new NetDev(Data);
    await this.netdevRepo.add(newNetDev);
    return newNetDev;
  }

  async get(Id) {
    console.log(Id);
    return await this.netdevRepo.get(Id);
  }


  async getAll() {
    return await this.netdevRepo.getAll();
  }

  async delete(Id) {
    return await this.netdevRepo.delete(Id);
  }

  async update(Id, Data) {
    
    return await this.netdevRepo.update(Id,Data);
  }


}

module.exports = NetDevUseCases;





  