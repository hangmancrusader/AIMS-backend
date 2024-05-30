//const { Pool } = require('pg');
const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class ServiceRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss
  async add(data) {
    try {
      const query = `
    INSERT INTO service (
      appID,
      dbID,
      userID,
      servicename,
      ServiceCustomer,
      ServiceCustodian,
      ServiceOwner,
      OwnerContInfo,
      Configurationfiles,
      CustomizationOptions,
      BriefDescription,
      detailedDesc,
      DeployDate,
      RolloutPlandetails,
      SecProtocols,
      SerCreationDate,
      SerDecommDate,
      ServiceCategory,
      ServiceClass,
      SLAdeets,
      SLAExpiryDate,
      VendorContact,
      SupportContDetails,
      AccessReq,
      AuthMethods,
      purchasedate,
      Cost,
      DependencyServ,
      DependentServ,
      Applications,
      Databases
    ) 
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
      $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
      $21, $22, $23, $24, $25, $26, $27, $28,$29,$30,$31
    ) 
    RETURNING id;
    
    `;
      const values = [
        data.appID,
        data.dbID,
        data.userID,
        data.servicename,
        data.ServiceCustomer,
        data.ServiceCustodian,
        data.ServiceOwner,
        data.OwnerContInfo,
        data.Configurationfiles,
        data.CustomizationOptions,
        data.BriefDescription,
        data.detailedDesc,
        data.DeployDate,
        data.RolloutPlandetails,
        data.SecProtocols,
        data.SerCreationDate,
        data.SerDecommDate,
        data.ServiceCategory,
        data.ServiceClass,
        data.SLAdeets,
        data.SLAExpiryDate,
        data.VendorContact,
        data.SupportContDetails,
        data.AccessReq,
        data.AuthMethods,
        data.purchasedate,
        data.Cost,
        data.DependencyServ,
        data.DependentServ,
        data.Applications,
        data.Databases
      ];

      const result = await this.pool.query(query, values);
      console.log("Service added successfully");
      const id = result.rows[0].id;
      console.log("Service added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added ");
      return "error";
    }
  } ////////////////////////////////////////////////////////////////

  async get(Id) {
    const query = `SELECT *,
      TO_CHAR(DeployDate, 'yyyy-MM-dd') AS DeployDate,
      TO_CHAR(SerCreationDate, 'yyyy-MM-dd') AS SerCreationDate,
      TO_CHAR(SerDecommDate, 'yyyy-MM-dd') AS SerDecommDate,
      TO_CHAR(SLAExpiryDate, 'yyyy-MM-dd') AS SLAExpiryDate,
      TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate  FROM service WHERE id = $1;
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
    const query = `SELECT *,
    TO_CHAR(DeployDate, 'yyyy-MM-dd') AS DeployDate,
    TO_CHAR(SerCreationDate, 'yyyy-MM-dd') AS SerCreationDate,
    TO_CHAR(SerDecommDate, 'yyyy-MM-dd') AS SerDecommDate,
    TO_CHAR(SLAExpiryDate, 'yyyy-MM-dd') AS SLAExpiryDate,
    TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate FROM service;
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
    const query = "DELETE FROM service WHERE id = $1 RETURNING id;";
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
  UPDATE service
  SET 
    appID = $2,
    dbID = $3,
    userID = $4,
    servicename = $5,
    ServiceCustomer = $6,
    ServiceCustodian = $7,
    ServiceOwner = $8,
    OwnerContInfo = $9,
    Configurationfiles = $10,
    CustomizationOptions = $11,
    BriefDescription = $12,
    detailedDesc = $13,
    DeployDate = $14,
    RolloutPlandetails = $15,
    SecProtocols = $16,
    SerCreationDate = $17,
    SerDecommDate = $18,
    ServiceCategory = $19,
    ServiceClass = $20,
    SLAdeets = $21,
    SLAExpiryDate = $22,
    VendorContact = $23,
    SupportContDetails = $24,
    AccessReq = $25,
    AuthMethods = $26,
    purchasedate = $27,
    Cost = $28,
    DependencyServ = $29,
    DependentServ = $30,
    Applications = $31,
    Databases = $32
  WHERE 
    id = $1
  RETURNING id;
  
    `;
    const values = [
      Id,
      data.appID,
      data.dbID,
      data.userID,
      data.servicename,
      data.ServiceCustomer,
      data.ServiceCustodian,
      data.ServiceOwner,
      data.OwnerContInfo,
      data.Configurationfiles,
      data.CustomizationOptions,
      data.BriefDescription,
      data.detailedDesc,
      data.DeployDate,
      data.RolloutPlandetails,
      data.SecProtocols,
      data.SerCreationDate,
      data.SerDecommDate,
      data.ServiceCategory,
      data.ServiceClass,
      data.SLAdeets,
      data.SLAExpiryDate,
      data.VendorContact,
      data.SupportContDetails,
      data.AccessReq,
      data.AuthMethods,
      data.purchasedate,
      data.Cost,
      data.DependencyServ,
      data.DependentServ,
      data.Applications,
      data.Databases
    ];
    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async assignedServiceOwner(roleId) {
    //displays all users that can be selected - this should be changed to display only those users that are service customers
    const query =
      "SELECT * FROM users INNER JOIN on service WHERE users.id = service.userID ";
    const values = [roleId];

    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }
}

module.exports = ServiceRepository;
