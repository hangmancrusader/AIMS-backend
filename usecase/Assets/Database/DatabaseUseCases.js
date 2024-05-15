// UseCases for User Administration done by a Root/Other Role
const DBRepository = require("../../../infrastructure/repository/DatabaseRepository.js");
const DB = require("../../../entitities/Database.js");
class DatabaseUseCases {
  constructor() {
    this.dbRepository = new DBRepository();
  }

  async add(Data) {
    console.log(Data);
    // Logic to add a new user
    const newDB = new DB(Data);
    const id = await this.dbRepository.add(newDB);
    return { newDB, id };
  }

  async get(Id) {
    console.log(Id);
    return await this.dbRepository.get(Id);
  }

  async getAll() {
    return await this.dbRepository.getAll();
  }

  async delete(Id) {
    return await this.dbRepository.delete(userId);
  }

  async update(Id, Data) {
    return await this.dbRepository.update(Id, Data);
  }
}

module.exports = DatabaseUseCases;
