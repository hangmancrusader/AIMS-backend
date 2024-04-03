// UseCases for User Administration done by a Root/Other Role
const LaptopRepository = require('../../../infrastructure/repository/LaptopRepository.js');
const Laptop = require("../../../entitities/Laptop.js")
class LaptopUseCases {

  constructor()
  {
    this.laptopRepo = new LaptopRepository();
  }

  async add(Data) {
    
    console.log(Data);
    
    const newLaptop = new Laptop(Data);
    await this.laptopRepo.add(newLaptop);
    return newLaptop;
  }

  async get(Id) {
    console.log(Id);
    return await this.laptopRepo.get(Id);
  }


  async getAll() {
    return await this.laptopRepo.getAll();
  }

  async delete(Id) {
    return await this.laptopRepo.delete(Id);
  }

  async update(Id, Data) {
    
    return await this.laptopRepo.update(Id,Data);
  }


}

module.exports = LaptopUseCases;





  