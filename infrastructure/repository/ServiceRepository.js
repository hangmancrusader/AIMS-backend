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
      $21, $22, $23, $24, $25, $26, $27, $28
    ) 
    RETURNING id;
    
    `;
      const values = [
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
    const query = "SELECT * FROM service WHERE id = $1";

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
    const query = "SELECT * FROM service";

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
    servicename = $2,
    ServiceCustomer = $3,
    ServiceCustodian = $4,
    ServiceOwner = $5,
    OwnerContInfo = $6,
    Configurationfiles = $7,
    CustomizationOptions = $8,
    BriefDescription = $9,
    detailedDesc = $10,
    DeployDate = $11,
    RolloutPlandetails = $12,
    SecProtocols = $13,
    SerCreationDate = $14,
    SerDecommDate = $15,
    ServiceCategory = $16,
    ServiceClass = $17,
    SLAdeets = $18,
    SLAExpiryDate = $19,
    VendorContact = $20,
    SupportContDetails = $21,
    AccessReq = $22,
    AuthMethods = $23,
    purchasedate = $24,
    Cost = $25,
    DependencyServ = $26,
    DependentServ = $27,
    Applications = $28,
    Databases = $29
  WHERE 
    id = $1
  RETURNING id;
  
    `;
    const values = [
      Id,
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
}

module.exports = ServiceRepository;
