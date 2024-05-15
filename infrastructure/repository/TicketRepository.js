//const { Pool } = require('pg');
const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class TicketRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
      const query = `
    INSERT INTO ticket (Assetname, SerialNumber, Manufacturer, ModelNo, AssetBarcode, Description, OS, Processor, RAM, Storage, Screensize, Currentlocation, Dept, AssignedUser, "Condition", Status, AssignmentHistory, Returndate, lastdeptacquired, purchasedate, cost, warrantyinfo, IPAddress, macaddress, installedsSW, Licenses, depmethod, decomissiondate, serviceProv, MaintainceHist, Firewallconfig, SecuritySW, Encryption)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32,$33)
    RETURNING id;
    `;
      const values = [
        data.Assetname,
        data.SerialNumber,
        data.Manufacturer,
        data.ModelNo,
        data.AssetBarcode,
        data.Description,
        data.OS,
        data.Processor,
        data.RAM,
        data.Storage,
        data.Screensize,
        data.Currentlocation,
        data.Dept,
        data.AssignedUser,
        data.Condition,
        data.Status,
        data.AssignmentHistory,
        data.Returndate,
        data.lastdeptacquired,
        data.purchasedate,
        data.cost,
        data.warrantyinfo,
        data.IPAddress,
        data.macaddress,
        data.installedsSW,
        data.Licenses,
        data.depmethod,
        data.decomissiondate,
        data.serviceProv,
        data.MaintainceHist,
        data.Firewallconfig,
        data.SecuritySW,
        data.Encryption
      ];

      const result = await this.pool.query(query, values);
      console.log("Ticket added successfully");
      const id = result.rows[0].id;
      console.log("Ticket added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added ");
      return "error";
    }
  } ///////////////////////////////////////////////////////////////

  async get(Id) {}

  async getAll() {}

  async delete(Id) {}

  async update(Id, Data) {}
}

module.exports = TicketRepository;
