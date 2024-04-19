//const { Pool } = require('pg');
const port = 8080
const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class NetDevRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
 
  async add(data) {
    try
    {
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
    console.log('NetDev added successfully with ID:', id);
    return id;
  }
  catch (err) {
    console.error(err);
    console.log("Not added ");
  }
}////////////////////////////////////////////////////////////////

 
 async get(Id) {
  const query = 'SELECT * FROM networkdevice WHERE id = $1';
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
  const query = 'SELECT * FROM networkdevice';

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

async update(Id, rData) {
  
}

}
  
module.exports = NetDevRepository;



