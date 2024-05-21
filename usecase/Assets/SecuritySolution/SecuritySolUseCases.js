// UseCases for User Administration done by a Root/Other Role
const SecSolRepository = require("../../../infrastructure/repository/SecuritySolRepository.js");
const SecSol = require("../../../entitities/SecuritySolution.js");
class SecSolUseCases {
  constructor() {
    this.secsolRepo = new SecSolRepository();
  }

  async add(Data) {
    console.log(Data);

    const newSecSol = new SecSol(Data);
    const id = await this.secsolRepo.add(newSecSol);
    return { newSecSol, id };
  }

  async get(Id) {
    console.log(Id);
    return await this.secsolRepo.get(Id);
  }

  async getAll() {
    return await this.secsolRepo.getAll();
  }

  async delete(Id) {
    return await this.secsolRepo.delete(Id);
  }

  async update(Id, Data) {
    return await this.secsolRepo.update(Id, Data);
  }
}

module.exports = SecSolUseCases;
