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
    const query = ` 
    SELECT *,
    TO_CHAR(Returndate, 'yyyy-MM-dd') AS Returndate,
    TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate,
    TO_CHAR(decomissiondate, 'yyyy-MM-dd') AS decomissiondate
    FROM laptop
    WHERE id = $1;
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
    FROM laptop;
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
    const query = "DELETE FROM laptop WHERE id = $1 RETURNING id;";
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
    UPDATE laptop
    SET
      Assetname = COALESCE($2, Assetname),
      SerialNumber = COALESCE($3, SerialNumber),
      Manufacturer = COALESCE($4, Manufacturer),
      ModelNo = COALESCE($5, ModelNo),
      AssetBarcode = COALESCE($6, AssetBarcode),
      Description = COALESCE($7, Description),
      OS = COALESCE($8, OS),
      Processor = COALESCE($9, Processor),
      RAM = COALESCE($10, RAM),
      Storage = COALESCE($11, Storage),
      Screensize = COALESCE($12, Screensize),
      Currentlocation = COALESCE($13, Currentlocation),
      Dept = COALESCE($14, Dept),
      AssignedUser = COALESCE($15, AssignedUser),
      "Condition" = COALESCE($16, "Condition"),
      Status = COALESCE($17, Status),
      AssignmentHistory = COALESCE($18, AssignmentHistory),
      Returndate = COALESCE($19, Returndate),
      lastdeptacquired = COALESCE($20, lastdeptacquired),
      purchasedate = COALESCE($21, purchasedate),
      cost = COALESCE($22, cost),
      warrantyinfo = COALESCE($23, warrantyinfo),
      IPAddress = COALESCE($24, IPAddress),
      macaddress = COALESCE($25, macaddress),
      installedsSW = COALESCE($26, installedsSW),
      Licenses = COALESCE($27, Licenses),
      depmethod = COALESCE($28, depmethod),
      decomissiondate = COALESCE($29, decomissiondate),
      serviceProv = COALESCE($30, serviceProv),
      MaintainceHist = COALESCE($31, MaintainceHist),
      Firewallconfig = COALESCE($32, Firewallconfig),
      SecuritySW = COALESCE($33, SecuritySW),
      Encryption = COALESCE($34, Encryption)
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

  async processCSV(csvdata) {
    const query = `
    INSERT INTO laptop (Assetname, SerialNumber, Manufacturer, ModelNo, AssetBarcode, Description, OS, Processor, RAM, Storage, Screensize, Currentlocation, Dept, AssignedUser, "Condition", Status, AssignmentHistory, Returndate, lastdeptacquired, purchasedate, cost, warrantyinfo, IPAddress, macaddress, installedsSW, Licenses, depmethod, decomissiondate, serviceProv, MaintainceHist, Firewallconfig, SecuritySW, Encryption)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32,$33);
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

module.exports = LaptopRepository;
