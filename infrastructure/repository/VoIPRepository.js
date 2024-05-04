//const { Pool } = require('pg');
const port = 8080
const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class VoIPRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
 
  async add(data) {
    try
    {
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
      console.log('Voip added successfully with ID:', id);
      return id;
    }
    catch (err) {
      console.error(err);
      console.log("Not added ");
      return ('error');
    }
      
    }//

 
 async get(Id) {
  const query = 'SELECT * FROM voip WHERE id = $1';
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
  const query = 'SELECT * FROM voip';

  const client = await this.pool.connect();
  try {
    const result = await client.query(query);
    return result.rows;
  } finally {
    client.release();
  }
}

async delete(Id) {
  
}

async update(Id, data) {
  const query = `
  UPDATE voip
SET 
    Assetname = $2,
    SerialNumber = $3,
    Assigneduser = $4,
    AssetBarcode = $5,
    DescriptionandSpecs = $6,
    OSVersion = $7,
    Processor = $8,
    RAM = $9,
    Storage = $10,
    Screensize = $11,
    Currentlocation = $12,
    Dept = $13,
    "Condition" = $14,
    Status = $15,
    Returndate = $16,
    purchasedate = $17,
    cost = $18,
    warrantyinfo = $19,
    IPAddress = $20,
    macaddress = $21,
    AssignmentHistory = $22,
    depmethod = $23,
    decomissiondate = $24,
    serviceProv = $25,
    BackupFreq = $26,
    "Method" = $27,
    integrationwithtools = $28,
    mentionif = $29,
    Snapshotinfo = $30
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
    const result = await client.query(query,values);
    return result.rows;
    } finally {
      client.release();
    }
}

}
  
module.exports = VoIPRepository;



