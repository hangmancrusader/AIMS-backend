//const { Pool } = require('pg');
const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class VoIPRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
      const query = `
      INSERT INTO voip (Assetname, SerialNumber, Assigneduser, AssetBarcode, DescriptionandSpecs, OSVersion, Processor, RAM, Storage, Screensize, Currentlocation, Dept, "Condition", Status, Returndate, purchasedate, cost, warrantyinfo, IPAddress, macaddress, AssignmentHistory, depmethod, decomissiondate, serviceProv, BackupFreq, "Method", integrationwithtools, mentionif, Snapshotinfo)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29)
RETURNING id;

      `;
      const values = [
        data.Assetname,
        data.SerialNumber,
        data.Assigneduser,
        data.AssetBarcode,
        data.DescriptionandSpecs,
        data.OSVersion,
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
        data.AssignmentHistory,
        data.depmethod,
        data.decomissiondate,
        data.serviceProv,
        data.BackupFreq,
        data.Method,
        data.integrationwithtools,
        data.mentionif,
        data.Snapshotinfo
      ];

      const result = await this.pool.query(query, values);
      console.log("Voip added successfully");
      const id = result.rows[0].id;
      console.log("Voip added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added ");
      return "error";
    }
  } //

  async get(Id) {
    const query = ` 
    SELECT *, 
    TO_CHAR(Returndate, 'yyyy-MM-dd') AS Returndate,
    TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate,
    TO_CHAR(decomissiondate, 'yyyy-MM-dd') AS decomissiondate 
    FROM voip WHERE id = $1; 
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
    FROM voip; 
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
    const query = "DELETE FROM voip WHERE id = $1 RETURNING id;";
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
    UPDATE voip
    SET
      Assetname = COALESCE($2, Assetname),
      SerialNumber = COALESCE($3, SerialNumber),
      Assigneduser = COALESCE($4, Assigneduser),
      AssetBarcode = COALESCE($5, AssetBarcode),
      DescriptionandSpecs = COALESCE($6, DescriptionandSpecs),
      OSVersion = COALESCE($7, OSVersion),
      Processor = COALESCE($8, Processor),
      RAM = COALESCE($9, RAM),
      Storage = COALESCE($10, Storage),
      Screensize = COALESCE($11, Screensize),
      Currentlocation = COALESCE($12, Currentlocation),
      Dept = COALESCE($13, Dept),
      "Condition" = COALESCE($14, "Condition"),
      Status = COALESCE($15, Status),
      Returndate = COALESCE($16, Returndate),
      purchasedate = COALESCE($17, purchasedate),
      cost = COALESCE($18, cost),
      warrantyinfo = COALESCE($19, warrantyinfo),
      IPAddress = COALESCE($20, IPAddress),
      macaddress = COALESCE($21, macaddress),
      AssignmentHistory = COALESCE($22, AssignmentHistory),
      depmethod = COALESCE($23, depmethod),
      decomissiondate = COALESCE($24, decomissiondate),
      serviceProv = COALESCE($25, serviceProv),
      BackupFreq = COALESCE($26, BackupFreq),
      "Method" = COALESCE($27, "Method"),
      integrationwithtools = COALESCE($28, integrationwithtools),
      mentionif = COALESCE($29, mentionif),
      Snapshotinfo = COALESCE($30, Snapshotinfo)
    WHERE
      id = $1
    RETURNING id;
    `;
    const values = [
      Id,
      data.Assetname,
      data.SerialNumber,
      data.Assigneduser,
      data.AssetBarcode,
      data.DescriptionandSpecs,
      data.OSVersion,
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
      data.AssignmentHistory,
      data.depmethod,
      data.decomissiondate,
      data.serviceProv,
      data.BackupFreq,
      data.Method,
      data.integrationwithtools,
      data.mentionif,
      data.Snapshotinfo
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
    INSERT INTO voip (Assetname, SerialNumber, Assigneduser, AssetBarcode, DescriptionandSpecs, OSVersion, Processor, RAM, Storage, Screensize, Currentlocation, Dept, "Condition", Status, Returndate, purchasedate, cost, warrantyinfo, IPAddress, macaddress, AssignmentHistory, depmethod, decomissiondate, serviceProv, BackupFreq, "Method", integrationwithtools, mentionif, Snapshotinfo)
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

module.exports = VoIPRepository;
