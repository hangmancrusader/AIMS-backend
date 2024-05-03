//const { Pool } = require('pg');
const port = 8080
const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class VMRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
 
  async add(data) {
    try
    {
    const query = `
    INSERT INTO virtualmachine (
      netdevID,
      secsolID,
      appID,
      dbID,
      VMname,
      Hostname,
      CPUconfig,
      AssetBarcode,
      StorageConfigSpecs,
      type,
      version,
      host,
      OStype,
      License,
      Firewallconfig,
      SecSW,
      SecSoln,
      Encryption,
      IPAddress,
      macaddress,
      DNS,
      Subnet,
      Gateway,
      deploymentMethod,
      decomissionDate,
      serviceProv,
      SSinfo,
      BackupFreq,
      "Method",
      integrationwithtools,
      mentionif,
      Currentlocation,
      Dept,
      Status,
      "Condition",
      purchasedate,
      cost
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
      $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
      $21, $22, $23, $24, $25, $26, $27, $28, $29, $30,
      $31, $32, $33, $34, $35, $36, $37
    )
    RETURNING id;

    `;
    const values = [
      data.netdevID,
      data.secsolID,
      data.appID,
      data.dbID,
      data.VMname,
      data.Hostname,
      data.CPUconfig,
      data.AssetBarcode,
      data.StorageConfigSpecs,
      data.type,
      data.version,
      data.host,
      data.OStype,
      data.License,
      data.Firewallconfig,
      data.SecSW,
      data.SecSoln,
      data.Encryption,
      data.IPAddress,
      data.macaddress,
      data.DNS,
      data.Subnet,
      data.Gateway,
      data.deploymentMethod,
      data.decomissionDate,
      data.serviceProv,
      data.SSinfo,
      data.BackupFreq,
      data.Method,
      data.integrationwithtools,
      data.mentionif,
      data.Currentlocation,
      data.Dept,
      data.Status,
      data.Condition,
      data.purchasedate,
      data.cost
    ];
     
    const result = await this.pool.query(query, values);
    console.log("VM added successfully");    
    const id = result.rows[0].id;
    console.log('VM added successfully with ID:', id);
    return id;
  }
  catch (err) {
    console.error(err);
    console.log("Not added ");
  }
}/////////////////////////////////////////////////////////////////

 
 async get(Id) {
  const query = 'SELECT * FROM virtualmachine WHERE id = $1';
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
  const query = 'SELECT * FROM virtualmachine';

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
  UPDATE virtualmachine
SET 
    netdevID = $2,
    secsolID = $3,
    appID = $4,
    dbID = $5,
    VMname = $6,
    Hostname = $7,
    CPUconfig = $8,
    AssetBarcode = $9,
    StorageConfigSpecs = $10,
    type = $11,
    version = $12,
    host = $13,
    OStype = $14,
    License = $15,
    Firewallconfig = $16,
    SecSW = $17,
    SecSoln = $18,
    Encryption = $19,
    IPAddress = $20,
    macaddress = $21,
    DNS = $22,
    Subnet = $23,
    Gateway = $24,
    deploymentMethod = $25,
    decomissionDate = $26,
    serviceProv = $27,
    SSinfo = $28,
    BackupFreq = $29,
    "Method" = $30,
    integrationwithtools = $31,
    mentionif = $32,
    Currentlocation = $33,
    Dept = $34,
    Status = $35,
    "Condition" = $36,
    purchasedate = $37,
    cost = $38
WHERE 
    id = $1
RETURNING id;


    `;
    const values = [
      Id,
      data.netdevID,
      data.secsolID,
      data.appID,
      data.dbID,
      data.VMname,
      data.Hostname,
      data.CPUconfig,
      data.AssetBarcode,
      data.StorageConfigSpecs,
      data.type,
      data.version,
      data.host,
      data.OStype,
      data.License,
      data.Firewallconfig,
      data.SecSW,
      data.SecSoln,
      data.Encryption,
      data.IPAddress,
      data.macaddress,
      data.DNS,
      data.Subnet,
      data.Gateway,
      data.deploymentMethod,
      data.decomissionDate,
      data.serviceProv,
      data.SSinfo,
      data.BackupFreq,
      data.Method,
      data.integrationwithtools,
      data.mentionif,
      data.Currentlocation,
      data.Dept,
      data.Status,
      data.Condition,
      data.purchasedate,
      data.cost
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
  
module.exports = VMRepository;



