// UseCases for User Administration done by a Root/Other Role
const TicketRepository = require("../../infrastructure/repository/TablesRepository.js");
const Ticket = require("../../entitities/Ticket.js");
class LaptopUseCases {
  constructor() {
    this.TicketRepository = new TicketRepository();
  }

  async add(Data) {
    console.log(Data);

    const newTicket = new Ticket(Data);
    await this.TicketRepository.add(newTicket);
    return newTicket;
  }

  async get(Id) {
    console.log(Id);
    return await this.TicketRepository.get(Id);
  }

  async getAll() {
    return await this.TicketRepository.getAll();
  }

  async delete(Id) {
    return await this.TicketRepository.delete(Id);
  }

  async update(Id, Data) {
    return await this.TicketRepository.update(Id, Data);
  }
}

module.exports = LaptopUseCases;
