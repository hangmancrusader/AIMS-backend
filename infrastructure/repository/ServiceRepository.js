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
      Databases,
      ConfidentialityRequirement,
      IntegrityRequirement,
      AvailabilityRequirement
    ) 
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
      $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
      $21, $22, $23, $24, $25, $26, $27, $28,$29,$30,$31,$32,$33,$34
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
        data.Databases,
        data.ConfidentialityRequirement,
        data.IntegrityRequirement,
        data.AvailabilityRequirement
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
        appID = COALESCE($2, appID),
        dbID = COALESCE($3, dbID),
        userID = COALESCE($4, userID),
        servicename = COALESCE($5, servicename),
        ServiceCustomer = COALESCE($6, ServiceCustomer),
        ServiceCustodian = COALESCE($7, ServiceCustodian),
        ServiceOwner = COALESCE($8, ServiceOwner),
        OwnerContInfo = COALESCE($9, OwnerContInfo),
        Configurationfiles = COALESCE($10, Configurationfiles),
        CustomizationOptions = COALESCE($11, CustomizationOptions),
        BriefDescription = COALESCE($12, BriefDescription),
        detailedDesc = COALESCE($13, detailedDesc),
        DeployDate = COALESCE($14, DeployDate),
        RolloutPlandetails = COALESCE($15, RolloutPlandetails),
        SecProtocols = COALESCE($16, SecProtocols),
        SerCreationDate = COALESCE($17, SerCreationDate),
        SerDecommDate = COALESCE($18, SerDecommDate),
        ServiceCategory = COALESCE($19, ServiceCategory),
        ServiceClass = COALESCE($20, ServiceClass),
        SLAdeets = COALESCE($21, SLAdeets),
        SLAExpiryDate = COALESCE($22, SLAExpiryDate),
        VendorContact = COALESCE($23, VendorContact),
        SupportContDetails = COALESCE($24, SupportContDetails),
        AccessReq = COALESCE($25, AccessReq),
        AuthMethods = COALESCE($26, AuthMethods),
        purchasedate = COALESCE($27, purchasedate),
        Cost = COALESCE($28, Cost),
        DependencyServ = COALESCE($29, DependencyServ),
        DependentServ = COALESCE($30, DependentServ),
        Applications = COALESCE($31, Applications),
        Databases = COALESCE($32, Databases),
        ConfidentialityRequirement = COALESCE($33, ConfidentialityRequirement),
        IntegrityRequirement = COALESCE($34, IntegrityRequirement),
        AvailabilityRequirement = COALESCE($35, AvailabilityRequirement)
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
      data.Databases,
      data.ConfidentialityRequirement,
      data.IntegrityRequirement,
      data.AvailabilityRequirement
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

  async getClassification() {
    const query = `SELECT 
    s.servicename, 
    s.ServiceOwner, 
    s.ServiceClass,
    CONCAT(u.firstname, ' ', u.lastname) AS Service_Custodian
    FROM 
        service s
    JOIN 
        users u ON s.userID= u.id
    JOIN 
        role r ON u.roleID = r.id
    WHERE 
    s.ServiceClass = 'Yes' 
    OR r.TypeofRole = 'Service Custodian';

    `;
    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async getReclassification() {
    const query = `SELECT 
    s.servicename, 
    s.ServiceOwner, 
    s.ServiceClass,
    CONCAT(u.firstname, ' ', u.lastname) AS Service_Custodian
    FROM 
        service s
    JOIN 
        users u ON s.userID= u.id
    JOIN 
        role r ON u.roleID = r.id
    WHERE 
    s.ServiceClass = 'No' 
    OR r.TypeofRole = 'Service Custodian';

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

module.exports = ServiceRepository;
