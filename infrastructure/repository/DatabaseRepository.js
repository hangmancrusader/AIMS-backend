//const { Pool } = require('pg');
const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class DatabaseRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
      const query = `
    INSERT INTO database (
      vmID,
      userID
      DBServername,
      type,
      ServerIPAdd,
      Virtual_Machine,
      DBMStype,
      DBMSversion,
      instance,
      CertifExpiry,
      DBNames,
      DBowners,
      CollationSett,
      BackupFreq,
      TimeforBACKUP,
      RecoveryModel,
      BackupStorageLocation,
      ClusteringConfig,
      ReplicateConfig,
      VendorContact,
      SupportContDetails,
      versionandUpdates,
      purchasedate,
      cost
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
      $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
      $21, $22, $23, $24
    )
    RETURNING id;
    `;
      const values = [
        data.vmID,
        data.userID,
        data.DBServername,
        data.type,
        data.ServerIPAdd,
        data.Virtual_Machine,
        data.DBMStype,
        data.DBMSversion,
        data.instance,
        data.CertifExpiry,
        data.DBNames,
        data.DBowners,
        data.CollationSett,
        data.BackupFreq,
        data.TimeforBACKUP,
        data.RecoveryModel,
        data.BackupStorageLocation,
        data.ClusteringConfig,
        data.ReplicateConfig,
        data.VendorContact,
        data.SupportContDetails,
        data.versionandUpdates,
        data.purchasedate,
        data.cost
      ];

      const result = await this.pool.query(query, values);
      console.log("Database added successfully");
      const id = result.rows[0].id;
      console.log("Database added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added ");
      return "error";
    }
  } ////////////////////////////////////////////////////////////////

  async get(Id) {
    const query =
      "SELECT *, TO_CHAR(CertifExpiry, 'yyyy-MM-dd') AS CertifExpiry, TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate FROM database WHERE id = $1";
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
    const query =
      "SELECT * , TO_CHAR(CertifExpiry, 'yyyy-MM-dd') AS CertifExpiry, TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate FROM database;";

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async delete(Id) {}

  async update(Id, data) {
    const query = `
  UPDATE database
  SET 
      vmID = $2,
      userID = $3,
      DBServername = $4,
      type = $5,
      ServerIPAdd = $6,
      Virtual_Machine = $7,
      DBMStype = $8,
      DBMSversion = $9,
      instance = $10,
      CertifExpiry = $11,
      DBNames = $12,
      DBowners = $13,
      CollationSett = $14,
      BackupFreq = $15,
      TimeforBACKUP = $16,
      RecoveryModel = $17,
      BackupStorageLocation = $18,
      ClusteringConfig = $19,
      ReplicateConfig = $20,
      VendorContact = $21,
      SupportContDetails = $22,
      versionandUpdates = $23,
      purchasedate = $24,
      cost = $25
  WHERE 
      id = $1
      RETURNING id;
    `;
    const values = [
      Id,
      data.vmID,
      data.userID,
      data.DBServername,
      data.type,
      data.ServerIPAdd,
      data.Virtual_Machine,
      data.DBMStype,
      data.DBMSversion,
      data.instance,
      data.CertifExpiry,
      data.DBNames,
      data.DBowners,
      data.CollationSett,
      data.BackupFreq,
      data.TimeforBACKUP,
      data.RecoveryModel,
      data.BackupStorageLocation,
      data.ClusteringConfig,
      data.ReplicateConfig,
      data.VendorContact,
      data.SupportContDetails,
      data.versionandUpdates,
      data.purchasedate,
      data.cost
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

module.exports = DatabaseRepository;
