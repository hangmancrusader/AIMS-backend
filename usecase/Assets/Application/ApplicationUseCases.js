// UseCases for User Administration done by a Root/Other Role
const ApplicationRepository = require('../../../infrastructure/repository/ApplicationRepository.js');
const Application = require("../../../entitities/Application.js")
class ApplicationUseCases {

  constructor()
  {
    this.applicationRepository = new ApplicationRepository();;
  }

  async add(Data) {
    
    console.log(Data);
    
    const newApp = new Application(Data);
    const id = await this.applicationRepository.add(newApp);
    return {newApp,id};
  }

  async get(Id) {
    console.log(Id);
    return await this.applicationRepository.get(Id);
  }


  async getAll() {
    return await this.applicationRepository.getAll();
  }

  async delete(Id) {
    return await this.applicationRepository.delete(Id);
  }

  async update(Id, Data) {
    
    return await this.applicationRepository.update(Id,Data);
  }


}

module.exports = ApplicationUseCases;





  