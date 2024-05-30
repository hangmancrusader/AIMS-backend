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
    const query = ` 
    SELECT *, 
    TO_CHAR(Returndate, 'yyyy-MM-dd') AS Returndate,
    TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate,
    TO_CHAR(decomissiondate, 'yyyy-MM-dd') AS decomissiondate 
    FROM printer WHERE id = $1; 
    `;
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
    const query = ` 
    SELECT *, 
    TO_CHAR(Returndate, 'yyyy-MM-dd') AS Returndate,
    TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate,
    TO_CHAR(decomissiondate, 'yyyy-MM-dd') AS decomissiondate 
    FROM printer; 
    `;

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
      Assetname = COALESCE($2, Assetname),
      SerialNumber = COALESCE($3, SerialNumber),
      AssetBarcode = COALESCE($4, AssetBarcode),
      Currentlocation = COALESCE($5, Currentlocation),
      Dept = COALESCE($6, Dept),
      "Condition" = COALESCE($7, "Condition"),
      Status = COALESCE($8, Status),
      Returndate = COALESCE($9, Returndate),
      purchasedate = COALESCE($10, purchasedate),
      cost = COALESCE($11, cost),
      warrantyinfo = COALESCE($12, warrantyinfo),
      AssignmentHistory = COALESCE($13, AssignmentHistory),
      Manufacturer = COALESCE($14, Manufacturer),
      ModelNo = COALESCE($15, ModelNo),
      "Desc" = COALESCE($16, "Desc"),
      OS = COALESCE($17, OS),
      Port = COALESCE($18, Port),
      assigneduser = COALESCE($19, assigneduser),
      lastdeptacquired = COALESCE($20, lastdeptacquired),
      installedsSW = COALESCE($21, installedsSW),
      Licenses = COALESCE($22, Licenses),
      deployement_method = COALESCE($23, deployement_method),
      decomissiondate = COALESCE($24, decomissiondate),
      serviceProv = COALESCE($25, serviceProv),
      MaintainceHist = COALESCE($26, MaintainceHist)
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
  async processCSV(csvdata) {
    const query = `
      INSERT INTO printer ( Assetname, SerialNumber, AssetBarcode, Currentlocation, Dept, "Condition", Status, Returndate, purchasedate, cost, warrantyinfo, AssignmentHistory, Manufacturer, ModelNo, "Desc", OS, Port, assigneduser, lastdeptacquired, installedsSW, Licenses, deployement_method, decomissiondate, serviceProv, MaintainceHist)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25);
      `;
    const client = await this.pool.connect();
    try {
      for (const row of csvdata) {
        await client.query(query, row);
      }
    } finally {
      client.release();
    }
  }
}

module.exports = PrinterRepository;
