// UseCases for User Administration done by a Root/Other Role
const MobilePhoneRepository = require("../../../infrastructure/repository/MobilePhoneRepository.js");
const MobPhone = require("../../../entitities/MobilePhone.js");
class MobilePhoneUseCases {
  constructor() {
    this.mobPhoneRepo = new MobilePhoneRepository();
  }

  async add(Data) {
    console.log(Data);

    const newMobPhone = new MobPhone(Data);
    const id = await this.mobPhoneRepo.add(newMobPhone);
    return { id };
  }

  async get(Id) {
    console.log(Id);
    return await this.mobPhoneRepo.get(Id);
  }

  async getAll() {
    return await this.mobPhoneRepo.getAll();
  }

  async delete(Id) {
    return await this.mobPhoneRepo.delete(Id);
  }

  async update(Id, Data) {
    return await this.mobPhoneRepo.update(Id, Data);
  }

  async processCSV(csvdata) {
    console.log(csvdata);
    return await this.mobPhoneRepo.processCSV(csvdata);
  }
}

module.exports = MobilePhoneUseCases;
