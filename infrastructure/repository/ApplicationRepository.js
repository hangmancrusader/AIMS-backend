const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class ApplicationRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
      const query = `
    INSERT INTO application (
      serviceID,
      vmID,
      dbID,
      ServerName,
      Servertype,
      ServerIPAdd,
      Virtual_Machine,
      DatabaseServer,
      BackupFreq,
      BackupMethods,
      RecoveryProcedures,
      ApplicationName,
      ApplicationVers,
      ApplicationURL,
      deploymentMethod,
      UserRoles,
      UserPermissions,
      SSLconfig,
      WebServerType,
      WebServerVers,
      VirtualHostConfig,
      VendorContact,
      SupportContDetails,
      DBconnectdetails,
      DBnames,
      CurrentVers,
      LastUpdate,
      Monitortools,
      ifyesExplain,
      purchasedate,
      cost
    ) 
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
      $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
      $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31
    ) 
    RETURNING id;
    

    `;
      const values = [
        data.serviceID,
        data.vmID,
        data.dbID,
        data.ServerName,
        data.Servertype,
        data.ServerIPAdd,
        data.Virtual_Machine,
        data.DatabaseServer,
        data.BackupFreq,
        data.BackupMethods,
        data.RecoveryProcedures,
        data.ApplicationName,
        data.ApplicationVers,
        data.ApplicationURL,
        data.deploymentMethod,
        data.UserRoles,
        data.UserPermissions,
        data.SSLconfig,
        data.WebServerType,
        data.WebServerVers,
        data.VirtualHostConfig,
        data.VendorContact,
        data.SupportContDetails,
        data.DBconnectdetails,
        data.DBnames,
        data.CurrentVers,
        data.LastUpdate,
        data.Monitortools,
        data.ifyesExplain,
        data.purchasedate,
        data.cost
      ];

      const result = await this.pool.query(query, values);
      console.log("Application added successfully");
      const id = result.rows[0].id;
      console.log("Application added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added");
      return "error";
    }
  } ////////////////////////////////////////////////////////////////

  async get(Id) {
    const query =
      "SELECT *,TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate, TO_CHAR(LastUpdate, 'yyyy-MM-dd') AS LastUpdate FROM application WHERE id = $1";
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
      "SELECT *,TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate, TO_CHAR(LastUpdate, 'yyyy-MM-dd') AS LastUpdate  FROM application;";

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
    UPDATE application
    SET 
      serviceID = COALESCE($2, serviceID),
      vmID = COALESCE($3, vmID),
      dbID = COALESCE($4, dbID),
      ServerName = COALESCE($5, ServerName),
      Servertype = COALESCE($6, Servertype),
      ServerIPAdd = COALESCE($7, ServerIPAdd),
      Virtual_Machine = COALESCE($8, Virtual_Machine),
      DatabaseServer = COALESCE($9, DatabaseServer),
      BackupFreq = COALESCE($10, BackupFreq),
      BackupMethods = COALESCE($11, BackupMethods),
      RecoveryProcedures = COALESCE($12, RecoveryProcedures),
      ApplicationName = COALESCE($13, ApplicationName),
      ApplicationVers = COALESCE($14, ApplicationVers),
      ApplicationURL = COALESCE($15, ApplicationURL),
      deploymentMethod = COALESCE($16, deploymentMethod),
      UserRoles = COALESCE($17, UserRoles),
      UserPermissions = COALESCE($18, UserPermissions),
      SSLconfig = COALESCE($19, SSLconfig),
      WebServerType = COALESCE($20, WebServerType),
      WebServerVers = COALESCE($21, WebServerVers),
      VirtualHostConfig = COALESCE($22, VirtualHostConfig),
      VendorContact = COALESCE($23, VendorContact),
      SupportContDetails = COALESCE($24, SupportContDetails),
      DBconnectdetails = COALESCE($25, DBconnectdetails),
      DBnames = COALESCE($26, DBnames),
      CurrentVers = COALESCE($27, CurrentVers),
      LastUpdate = COALESCE($28, LastUpdate),
      Monitortools = COALESCE($29, Monitortools),
      ifyesExplain = COALESCE($30, ifyesExplain),
      purchasedate = COALESCE($31, purchasedate),
      cost = COALESCE($32, cost)
    WHERE
      id = $1
    RETURNING id;
    
    `;
    const values = [
      Id,
      data.serviceID,
      data.vmID,
      data.dbID,
      data.ServerName,
      data.Servertype,
      data.ServerIPAdd,
      data.Virtual_Machine,
      data.DatabaseServer,
      data.BackupFreq,
      data.BackupMethods,
      data.RecoveryProcedures,
      data.ApplicationName,
      data.ApplicationVers,
      data.ApplicationURL,
      data.deploymentMethod,
      data.UserRoles,
      data.UserPermissions,
      data.SSLconfig,
      data.WebServerType,
      data.WebServerVers,
      data.VirtualHostConfig,
      data.VendorContact,
      data.SupportContDetails,
      data.DBconnectdetails,
      data.DBnames,
      data.CurrentVers,
      data.LastUpdate,
      data.Monitortools,
      data.ifyesExplain,
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

module.exports = ApplicationRepository;
