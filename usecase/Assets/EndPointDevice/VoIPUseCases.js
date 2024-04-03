// UseCases for User Administration done by a Root/Other Role
const VoIPRepository = require('../../../infrastructure/repository/VoIPRepository.js');
const VoIP = require("../../../entitities/VoIP.js")
class VoIPUseCases {

  constructor()
  {
    this.voipRepo = new VoIPRepository();
  }

  async add(Data) {
    
    console.log(Data);
    
    const newVoIP = new VoIP(Data);
    await this.voipRepo.add(newVoIP);
    return newVoIP;
  }

  async get(Id) {
    console.log(Id);
    return await this.voipRepo.get(Id);
  }


  async getAll() {
    return await this.voipRepo.getAll();
  }

  async delete(Id) {
    return await this.voipRepo.delete(Id);
  }

  async update(Id, Data) {
    
    return await this.voipRepo.update(Id,Data);
  }


}

module.exports = VoIPUseCases;





  