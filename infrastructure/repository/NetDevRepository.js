//const { Pool } = require('pg');
const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class NetDevRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
      const query = `
    INSERT INTO networkdevice (
      DevName,
      type,
      ModelNo,
      PhysicalLoc,
      RackandUnit,
      FirewallRules,
      DetectionSettings,
      LoginUN,
      LoginPassword,
      SSHconfig,
      VPNtunnels,
      VPNsetting,
      RoutingTables,
      DynamicRoutingProtocols,
      OSVersion,
      Lastupdate,
      HighAvailConfig,
      FailOverSettings,
      InterfacesConfig,
      MACaddress,
      PortConfig,
      logging_config,
      SNMPConfig,
      PowerConsumption,
      TempEnvControls,
      Configfiles,
      RunningConfigs,
      purchasedate,
      Cost,
      VendorContact,
      SupportContDetails,
      Doclink
    ) 
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
      $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
      $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32
    ) 
    RETURNING id;
    
    `;
      const values = [
        data.DevName,
        data.type,
        data.ModelNo,
        data.PhysicalLoc,
        data.RackandUnit,
        data.FirewallRules,
        data.DetectionSettings,
        data.LoginUN,
        data.LoginPassword,
        data.SSHconfig,
        data.VPNtunnels,
        data.VPNsetting,
        data.RoutingTables,
        data.DynamicRoutingProtocols,
        data.OSVersion,
        data.Lastupdate,
        data.HighAvailConfig,
        data.FailOverSettings,
        data.InterfacesConfig,
        data.MACaddress,
        data.PortConfig,
        data.logging_config,
        data.SNMPConfig,
        data.PowerConsumption,
        data.TempEnvControls,
        data.Configfiles,
        data.RunningConfigs,
        data.purchasedate,
        data.Cost,
        data.VendorContact,
        data.SupportContDetails,
        data.Doclink
      ];

      const result = await this.pool.query(query, values);
      console.log("NetDev added successfully");
      const id = result.rows[0].id;
      console.log("NetDev added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added ");
      return "error";
    }
  } ////////////////////////////////////////////////////////////////

  async get(Id) {
    const query =
      "SELECT *,TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate, TO_CHAR(LastUpdate, 'yyyy-MM-dd') AS LastUpdate FROM networkdevice WHERE id = $1";
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
      "SELECT *,TO_CHAR(purchasedate, 'yyyy-MM-dd') AS purchasedate,  TO_CHAR(LastUpdate, 'yyyy-MM-dd') AS LastUpdate FROM networkdevice";

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async delete(Id) {
    const query = "DELETE FROM networkdevice WHERE id = $1 RETURNING id;";
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
  UPDATE networkdevice
SET 
    DevName = $2,
    type = $3,
    ModelNo = $4,
    PhysicalLoc = $5,
    RackandUnit = $6,
    FirewallRules = $7,
    DetectionSettings = $8,
    LoginUN = $9,
    LoginPassword = $10,
    SSHconfig = $11,
    VPNtunnels = $12,
    VPNsetting = $13,
    RoutingTables = $14,
    DynamicRoutingProtocols = $15,
    OSVersion = $16,
    Lastupdate = $17,
    HighAvailConfig = $18,
    FailOverSettings = $19,
    InterfacesConfig = $20,
    MACaddress = $21,
    PortConfig = $22,
    logging_config = $23,
    SNMPConfig = $24,
    PowerConsumption = $25,
    TempEnvControls = $26,
    Configfiles = $27,
    RunningConfigs = $28,
    purchasedate = $29,
    Cost = $30,
    VendorContact = $31,
    SupportContDetails = $32,
    Doclink = $33
WHERE 
    id = $1
RETURNING id;

    `;
    const values = [
      Id,
      data.DevName,
      data.type,
      data.ModelNo,
      data.PhysicalLoc,
      data.RackandUnit,
      data.FirewallRules,
      data.DetectionSettings,
      data.LoginUN,
      data.LoginPassword,
      data.SSHconfig,
      data.VPNtunnels,
      data.VPNsetting,
      data.RoutingTables,
      data.DynamicRoutingProtocols,
      data.OSVersion,
      data.Lastupdate,
      data.HighAvailConfig,
      data.FailOverSettings,
      data.InterfacesConfig,
      data.MACaddress,
      data.PortConfig,
      data.logging_config,
      data.SNMPConfig,
      data.PowerConsumption,
      data.TempEnvControls,
      data.Configfiles,
      data.RunningConfigs,
      data.purchasedate,
      data.Cost,
      data.VendorContact,
      data.SupportContDetails,
      data.Doclink
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

module.exports = NetDevRepository;
