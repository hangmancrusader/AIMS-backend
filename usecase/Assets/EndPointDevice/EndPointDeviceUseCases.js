// UseCases for User Administration done by a Root/Other Role
const EndPointDevRepository = require("../../../infrastructure/repository/EndPointDeviceRepository.js");
const EndPointDev = require("../../../entitities/EndPointDevice.js");
class EndPointDeviceUseCases {
  constructor() {
    this.EndPointDevRepository = new EndPointDevRepository();
  }

  async add(Data) {
    console.log(Data);

    const newDev = new EndPointDev(Data);
    const id = await this.EndPointDevRepository.add(newDev);
    return { newDev, id };
  }

  async get(Id) {
    console.log(Id);
    return await this.EndPointDevRepository.get(Id);
  }

  async getAll() {
    return await this.EndPointDevRepository.getAll();
  }

  async delete(Id) {
    return await this.EndPointDevRepository.delete(Id);
  }

  async update(Id, Data) {
    return await this.EndPointDevRepository.update(Id, Data);
  }

  async getcount() {
    return await this.EndPointDevRepository.getcount();
  }

  async getperct() {
    return await this.EndPointDevRepository.getperct();
  }

  async getcost() {
    return await this.EndPointDevRepository.getcost();
  }
}

module.exports = EndPointDeviceUseCases;
