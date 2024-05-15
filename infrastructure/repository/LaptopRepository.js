//const { Pool } = require('pg');
const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class LaptopRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
      const query = `
    INSERT INTO laptop (Assetname, SerialNumber, Manufacturer, ModelNo, AssetBarcode, Description, OS, Processor, RAM, Storage, Screensize, Currentlocation, Dept, AssignedUser, "Condition", Status, AssignmentHistory, Returndate, lastdeptacquired, purchasedate, cost, warrantyinfo, IPAddress, macaddress, installedsSW, Licenses, depmethod, decomissiondate, serviceProv, MaintainceHist, Firewallconfig, SecuritySW, Encryption)
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
      console.log("Laptop added successfully");
      const id = result.rows[0].id;
      console.log("Laptop added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added ");
      return "error";
    }
  } ////////////////////////////////////////////////////////////////

  async get(Id) {
    const query = "SELECT * FROM laptop WHERE id = $1";
    const values = [Id];

    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  async getAll() {
    const query = "SELECT * FROM laptop";

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async delete(Id) {}

  async update(Id, data) {
    const query = `
  UPDATE laptop
SET 
    Assetname = $2,
    SerialNumber = $3,
    Manufacturer = $4,
    ModelNo = $5,
    AssetBarcode = $6,
    Description = $7,
    OS = $8,
    Processor = $9,
    RAM = $10,
    Storage = $11,
    Screensize = $12,
    Currentlocation = $13,
    Dept = $14,
    AssignedUser = $15,
    "Condition" = $16,
    Status = $17,
    AssignmentHistory = $18,
    Returndate = $19,
    lastdeptacquired = $20,
    purchasedate = $21,
    cost = $22,
    warrantyinfo = $23,
    IPAddress = $24,
    macaddress = $25,
    installedsSW = $26,
    Licenses = $27,
    depmethod = $28,
    decomissiondate = $29,
    serviceProv = $30,
    MaintainceHist = $31,
    Firewallconfig = $32,
    SecuritySW = $33,
    Encryption = $34
WHERE 
    id = $1
RETURNING id;

  
    `;
    const values = [
      Id,
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
    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows;
    } finally {
      client.release();
    }
  }
}

module.exports = LaptopRepository;
