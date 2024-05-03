//const { Pool } = require('pg');
const port = 8080
const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class MobilePhoneRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
 
 async add(data) {
  try
  {
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
    console.log('Mobile Phone added successfully with ID:', id);
    return id;
  }
  catch (err) {
    console.error(err);
    console.log("Not added ");
  }
  }////////////////////////////////////////////////////////////////

 
 async get(Id) {
  const query = 'SELECT * FROM mobilephone WHERE id = $1';
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
  const query = 'SELECT * FROM mobilephone';

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
  UPDATE mobilephone
  SET 
      Assetname = $2,
      SerialNumber = $3,
      Processor = $4,
      RAM = $5,
      Storage = $6,
      Screensize = $7,
      Currentlocation = $8,
      Dept = $9,
      "Condition" = $10,
      Status = $11,
      Returndate = $12,
      purchasedate = $13,
      cost = $14,
      warrantyinfo = $15,
      IPAddress = $16,
      macaddress = $17,
      depmethod = $18,
      decomissiondate = $19,
      serviceProv = $20,
      DescriptionandSpecs = $21,
      Assigneduser = $22,
      AssetBarcode = $23,
      OSVersion = $24,
      Snapshotinfo = $25,
      BackupFreq = $26,
      "Method" = $27,
      integrationwithtools = $28,
      mentionif = $29,
      AssignmentHistory = $30
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
    const result = await client.query(query,values);
    return result.rows[0];
    } finally {
      client.release();
    }
  
}

}
  
module.exports = MobilePhoneRepository;



