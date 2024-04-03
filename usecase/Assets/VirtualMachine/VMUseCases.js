// UseCases for User Administration done by a Root/Other Role
const VMRepository = require('../../../infrastructure/repository/VMRepository.js');
const VM = require("../../../entitities/VirtualMachine.js")
class VMUseCases {

  constructor()
  {
    this.vmRepository = new VMRepository();
  }

  async add(Data) {
    
    console.log(Data);
    
    const newVM = new VM(Data);
    await this.vmRepository.add(newVM);
    return newVM;
  }

  async get(Id) {
    console.log(Id);
    return await this.vmRepository.get(Id);
  }


  async getAll() {
    return await this.vmRepository.getAll();
  }

  async delete(Id) {
    return await this.vmRepository.delete(Id);
  }

  async update(Id, Data) {
    
    return await this.vmRepository.update(Id,Data);
  }


}

module.exports = VMUseCases;





  