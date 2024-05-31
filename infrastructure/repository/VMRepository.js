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
      hostingID = COALESCE($2, hostingID),
      netdevID = COALESCE($3, netdevID),
      secsolID = COALESCE($4, secsolID),
      VMname = COALESCE($5, VMname),
      Hostname = COALESCE($6, Hostname),
      CPUconfig = COALESCE($7, CPUconfig),
      AssetBarcode = COALESCE($8, AssetBarcode),
      StorageConfigSpecs = COALESCE($9, StorageConfigSpecs),
      type = COALESCE($10, type),
      version = COALESCE($11, version),
      host = COALESCE($12, host),
      OStype = COALESCE($13, OStype),
      License = COALESCE($14, License),
      Firewallconfig = COALESCE($15, Firewallconfig),
      SecSW = COALESCE($16, SecSW),
      SecSoln = COALESCE($17, SecSoln),
      Encryption = COALESCE($18, Encryption),
      IPAddress = COALESCE($19, IPAddress),
      macaddress = COALESCE($20, macaddress),
      DNS = COALESCE($21, DNS),
      Subnet = COALESCE($22, Subnet),
      Gateway = COALESCE($23, Gateway),
      deploymentMethod = COALESCE($24, deploymentMethod),
      decomissionDate = COALESCE($25, decomissionDate),
      serviceProv = COALESCE($26, serviceProv),
      SSinfo = COALESCE($27, SSinfo),
      BackupFreq = COALESCE($28, BackupFreq),
      "Method" = COALESCE($29, "Method"),
      integrationwithtools = COALESCE($30, integrationwithtools),
      mentionif = COALESCE($31, mentionif),
      Currentlocation = COALESCE($32, Currentlocation),
      Dept = COALESCE($33, Dept),
      Status = COALESCE($34, Status),
      "Condition" = COALESCE($35, "Condition"),
      purchasedate = COALESCE($36, purchasedate),
      cost = COALESCE($37, cost),
      NetworkDeviceName = COALESCE($38, NetworkDeviceName),
      NetworkDeviceType = COALESCE($39, NetworkDeviceType),
      NetworkDeviceModelNumber = COALESCE($40, NetworkDeviceModelNumber)
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

  async vmfortidytree() {
    const query = `
    SELECT vm.id, vm. VMname , vm.Hostname, vm.SecSoln, vm.NetworkDeviceName
    FROM virtualmachine vm
    LEFT JOIN hosting h ON vm.hostingID= h.id
    LEFT JOIN securitysolution s ON vm.secsolID= s.id
    LEFT JOIN networkdevice n ON vm.netdevID= n.id;
    `;
    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }
}

module.exports = VMRepository;
