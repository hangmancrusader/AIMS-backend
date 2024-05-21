// UseCases for User Administration done by a Root/Other Role
const ServiceRepository = require("../../../infrastructure/repository/ServiceRepository.js");
const Service = require("../../../entitities/Service.js");
class ServiceUseCases {
  constructor() {
    this.serviceRepository = new ServiceRepository();
  }

  async add(Data) {
    console.log(Data);

    const newService = new Service(Data);
    const id = await this.serviceRepository.add(newService);
    return { newService, id };
  }

  async get(Id) {
    console.log(Id);
    return await this.serviceRepository.get(Id);
  }

  async getAll() {
    return await this.serviceRepository.getAll();
  }

  async delete(Id) {
    return await this.serviceRepository.delete(Id);
  }

  async update(Id, Data) {
    return await this.serviceRepository.update(Id, Data);
  }
}

module.exports = ServiceUseCases;
