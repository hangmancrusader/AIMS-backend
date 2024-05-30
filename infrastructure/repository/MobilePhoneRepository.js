//const { Pool } = require('pg');
const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class MobilePhoneRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
      const query = `
    INSERT INTO mobilephone (Assetname, SerialNumber, Processor, RAM, Storage, Screensize, Currentlocation, Dept, "Condition", Status, Returndate, purchasedate, cost, warrantyinfo, IPAddress, macaddress, depmethod, decomissiondate, serviceProv, DescriptionandSpecs, Assigneduser, AssetBarcode, OSVersion, Snapshotinfo, BackupFreq, "Method", integrationwithtools, mentionif, AssignmentHistory)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29)
    RETURNING id;
    
    `;
      const values = [
        data.Assetname,
        data.SerialNumber,
        data.Processor,
        data.RAM,
        data.Storage,
        data.Screensize,
        data.Currentlocation,
        data.Dept,
        data.Condition,
        data.Status,
        data.Returndate,
        data.purchasedate,
        data.cost,
        data.warrantyinfo,
        data.IPAddress,
        data.macaddress,
        data.depmethod,
        data.decomissiondate,
        data.serviceProv,
        data.DescriptionandSpecs,
        data.Assigneduser,
        data.AssetBarcode,
        data.OSVersion,
        data.Snapshotinfo,
        data.BackupFreq,
        data.Method,
        data.integrationwithtools,
        data.mentionif,
        data.AssignmentHistory
      ];

      const result = await this.pool.query(query, values);
      console.log("Mobile Phone added successfully");
      const id = result.rows[0].id;
      console.log("Mobile Phone added successfully with ID:", id);
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
    FROM mobilephone WHERE id = $1; 
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
    FROM mobilephone; 
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
    const query = "DELETE FROM mobilephone WHERE id = $1 RETURNING id;";
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
    UPDATE mobilephone
    SET
      Assetname = COALESCE($2, Assetname),
      SerialNumber = COALESCE($3, SerialNumber),
      Processor = COALESCE($4, Processor),
      RAM = COALESCE($5, RAM),
      Storage = COALESCE($6, Storage),
      Screensize = COALESCE($7, Screensize),
      Currentlocation = COALESCE($8, Currentlocation),
      Dept = COALESCE($9, Dept),
      "Condition" = COALESCE($10, "Condition"),
      Status = COALESCE($11, Status),
      Returndate = COALESCE($12, Returndate),
      purchasedate = COALESCE($13, purchasedate),
      cost = COALESCE($14, cost),
      warrantyinfo = COALESCE($15, warrantyinfo),
      IPAddress = COALESCE($16, IPAddress),
      macaddress = COALESCE($17, macaddress),
      depmethod = COALESCE($18, depmethod),
      decomissiondate = COALESCE($19, decomissiondate),
      serviceProv = COALESCE($20, serviceProv),
      DescriptionandSpecs = COALESCE($21, DescriptionandSpecs),
      Assigneduser = COALESCE($22, Assigneduser),
      AssetBarcode = COALESCE($23, AssetBarcode),
      OSVersion = COALESCE($24, OSVersion),
      Snapshotinfo = COALESCE($25, Snapshotinfo),
      BackupFreq = COALESCE($26, BackupFreq),
      "Method" = COALESCE($27, "Method"),
      integrationwithtools = COALESCE($28, integrationwithtools),
      mentionif = COALESCE($29, mentionif),
      AssignmentHistory = COALESCE($30, AssignmentHistory)
    WHERE
      id = $1
    RETURNING id;
    
  
    `;
    const values = [
      Id,
      data.Assetname,
      data.SerialNumber,
      data.Processor,
      data.RAM,
      data.Storage,
      data.Screensize,
      data.Currentlocation,
      data.Dept,
      data.Condition,
      data.Status,
      data.Returndate,
      data.purchasedate,
      data.cost,
      data.warrantyinfo,
      data.IPAddress,
      data.macaddress,
      data.depmethod,
      data.decomissiondate,
      data.serviceProv,
      data.DescriptionandSpecs,
      data.Assigneduser,
      data.AssetBarcode,
      data.OSVersion,
      data.Snapshotinfo,
      data.BackupFreq,
      data.Method,
      data.integrationwithtools,
      data.mentionif,
      data.AssignmentHistory
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
    INSERT INTO mobilephone (Assetname, SerialNumber, Processor, RAM, Storage, Screensize, Currentlocation, Dept, "Condition", Status, Returndate, purchasedate, cost, warrantyinfo, IPAddress, macaddress, depmethod, decomissiondate, serviceProv, DescriptionandSpecs, Assigneduser, AssetBarcode, OSVersion, Snapshotinfo, BackupFreq, "Method", integrationwithtools, mentionif, AssignmentHistory)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29);
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

module.exports = MobilePhoneRepository;
