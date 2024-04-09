// UseCases for User Administration done by a Root/Other Role
const PrinterRepository = require('../../../infrastructure/repository/PrinterRepository.js');
const Printer = require("../../../entitities/Printer.js")
class PrinterUseCases {

  constructor()
  {
    this.printerRepo = new PrinterRepository();
  }

  async add(Data) {
    
    console.log(Data);
    
    const newPrinter = new Printer(Data);
    const id = await this.printerRepo.add(newPrinter);
    return {id};
  }

  async get(Id) {
    console.log(Id);
    return await this.printerRepo.get(Id);
  }


  async getAll() {
    return await this.printerRepo.getAll();
  }

  async delete(Id) {
    return await this.printerRepo.delete(Id);
  }

  async update(Id, Data) {
    
    return await this.printerRepo.update(Id,Data);
  }


}

module.exports = PrinterUseCases;





  