//const { Pool } = require('pg');
const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class VMRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
      const query = `
    INSERT INTO virtualmachine (
      hostingID,
      netdevID,
      secsolID,
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
      cost,
      NetworkDeviceName,
      NetworkDeviceType,
      NetworkDeviceModelNumber
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
      $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
      $21, $22, $23, $24, $25, $26, $27, $28, $29, $30,
      $31, $32, $33, $34, $35, $36, $37, $38, $39
    )
    RETURNING id;

    `;
      const values = [
        data.hostingID,
        data.netdevID,
        data.secsolID,
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
        data.cost,
        data.NetworkDeviceName,
        data.NetworkDeviceType,
        data.NetworkDeviceModelNumber
      ];

      const result = await this.pool.query(query, values);
      console.log("VM added successfully");
      const id = result.rows[0].id;
      console.log("VM added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added ");
      return "error";
    }
  } /////////////////////////////////////////////////////////////////

  async get(Id) {
    const query =
      "SELECT *,TO_CHAR(decomissionDate, 'yyyy-MM-dd') AS decomissionDate,TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate FROM virtualmachine WHERE id = $1";
    const values = [Id];

    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  async getHostingForVM() {
    const query =
      "SELECT * FROM hosting LEFT JOIN virtualmachine ON hosting.id = virtualmachine.hostingID GROUP BY hosting.id;";
    //const values = [Id];

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  async getAll() {
    const query =
      "SELECT *,TO_CHAR(decomissionDate, 'yyyy-MM-dd') AS decomissionDate,TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate FROM virtualmachine";

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async delete(Id) {
    const query = "DELETE FROM virtualmachine WHERE id = $1 RETURNING id;";
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
  UPDATE virtualmachine
SET 
    hostingID = $2,
    netdevID = $3,
    secsolID = $4,
    VMname = $5,
    Hostname = $6,
    CPUconfig = $7,
    AssetBarcode = $8,
    StorageConfigSpecs = $9,
    type = $10,
    version = $11,
    host = $12,
    OStype = $13,
    License = $14,
    Firewallconfig = $15,
    SecSW = $16,
    SecSoln = $17,
    Encryption = $18,
    IPAddress = $19,
    macaddress = $20,
    DNS = $21,
    Subnet = $22,
    Gateway = $23,
    deploymentMethod = $24,
    decomissionDate = $25,
    serviceProv = $26,
    SSinfo = $27,
    BackupFreq = $28,
    "Method" = $29,
    integrationwithtools = $30,
    mentionif = $31,
    Currentlocation = $32,
    Dept = $33,
    Status = $34,
    "Condition" = $35,
    purchasedate = $36,
    cost = $37,
    NetworkDeviceName = $38,
    NetworkDeviceType = $39,
    NetworkDeviceModelNumber = $40
WHERE 
    id = $1
RETURNING id;


    `;
    const values = [
      Id,
      data.hostingID,
      data.netdevID,
      data.secsolID,
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
      data.cost,
      data.NetworkDeviceName,
      data.NetworkDeviceType,
      data.NetworkDeviceModelNumber
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

module.exports = VMRepository;
