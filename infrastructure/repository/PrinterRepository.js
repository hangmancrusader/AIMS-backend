//const { Pool } = require('pg');
const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class PrinterRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
      const query = `
      INSERT INTO printer ( Assetname, SerialNumber, AssetBarcode, Currentlocation, Dept, "Condition", Status, Returndate, purchasedate, cost, warrantyinfo, AssignmentHistory, Manufacturer, ModelNo, "Desc", OS, Port, assigneduser, lastdeptacquired, installedsSW, Licenses, deployement_method, decomissiondate, serviceProv, MaintainceHist)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25)
      RETURNING id;
      `;
      const values = [
        data.Assetname,
        data.SerialNumber,
        data.AssetBarcode,
        data.Currentlocation,
        data.Dept,
        data.Condition,
        data.Status,
        data.Returndate,
        data.purchasedate,
        data.cost,
        data.warrantyinfo,
        data.AssignmentHistory,
        data.Manufacturer,
        data.ModelNo,
        data.Desc,
        data.OS,
        data.Port,
        data.assigneduser,
        data.lastdeptacquired,
        data.installedsSW,
        data.Licenses,
        data.deployement_method,
        data.decomissiondate,
        data.serviceProv,
        data.MaintainceHist
      ];

      const result = await this.pool.query(query, values);
      console.log("Printer added successfully");
      const id = result.rows[0].id;
      console.log("Printer added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added ");
      return "error";
    }
  } //////////////////////////////////////////////////////////////////

  async get(Id) {
    const query = "SELECT * FROM printer WHERE id = $1";
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
    const query = "SELECT * FROM printer";

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async delete(Id) {
    const query = "DELETE FROM printer WHERE id = $1 RETURNING id;";
    const values = [Id];

    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);

      if (result !== null) {
        return true;
      } else {
        false;
      }
    } finally {
      client.release();
    }
  }

  async update(Id, data) {
    const query = `
  UPDATE printer
  SET 
      Assetname = $2,
      SerialNumber = $3,
      AssetBarcode = $4,
      Currentlocation = $5,
      Dept = $6,
      "Condition" = $7,
      Status = $8,
      Returndate = $9,
      purchasedate = $10,
      cost = $11,
      warrantyinfo = $12,
      AssignmentHistory = $13,
      Manufacturer = $14,
      ModelNo = $15,
      "Desc" = $16,
      OS = $17,
      Port = $18,
      assigneduser = $19,
      lastdeptacquired = $20,
      installedsSW = $21,
      Licenses = $22,
      deployement_method = $23,
      decomissiondate = $24,
      serviceProv = $25,
      MaintainceHist = $26
  WHERE 
      id = $1
  RETURNING id;
  
  
    `;
    const values = [
      Id,
      data.Assetname,
      data.SerialNumber,
      data.AssetBarcode,
      data.Currentlocation,
      data.Dept,
      data.Condition,
      data.Status,
      data.Returndate,
      data.purchasedate,
      data.cost,
      data.warrantyinfo,
      data.AssignmentHistory,
      data.Manufacturer,
      data.ModelNo,
      data.Desc,
      data.OS,
      data.Port,
      data.assigneduser,
      data.lastdeptacquired,
      data.installedsSW,
      data.Licenses,
      data.deployement_method,
      data.decomissiondate,
      data.serviceProv,
      data.MaintainceHist
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

module.exports = PrinterRepository;
