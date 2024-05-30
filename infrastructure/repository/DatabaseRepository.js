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
      vmID = COALESCE($2, vmID),
      userID = COALESCE($3, userID),
      DBServername = COALESCE($4, DBServername),
      type = COALESCE($5, type),
      ServerIPAdd = COALESCE($6, ServerIPAdd),
      Virtual_Machine = COALESCE($7, Virtual_Machine),
      DBMStype = COALESCE($8, DBMStype),
      DBMSversion = COALESCE($9, DBMSversion),
      instance = COALESCE($10, instance),
      CertifExpiry = COALESCE($11, CertifExpiry),
      DBNames = COALESCE($12, DBNames),
      DBowners = COALESCE($13, DBowners),
      CollationSett = COALESCE($14, CollationSett),
      BackupFreq = COALESCE($15, BackupFreq),
      TimeforBACKUP = COALESCE($16, TimeforBACKUP),
      RecoveryModel = COALESCE($17, RecoveryModel),
      BackupStorageLocation = COALESCE($18, BackupStorageLocation),
      ClusteringConfig = COALESCE($19, ClusteringConfig),
      ReplicateConfig = COALESCE($20, ReplicateConfig),
      VendorContact = COALESCE($21, VendorContact),
      SupportContDetails = COALESCE($22, SupportContDetails),
      versionandUpdates = COALESCE($23, versionandUpdates),
      purchasedate = COALESCE($24, purchasedate),
      cost = COALESCE($25, cost)
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
