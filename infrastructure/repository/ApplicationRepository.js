const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class ApplicationRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
 
  async add(data) {
    try
    {
    const query = `
    INSERT INTO application (serviceID, vmID, dbID, ServerName, Servertype, ServerIPAdd, Virtual_Machine, DatabaseServer, BackupFreq, BackupMethods, RecoveryProcedures, ApplicationName, ApplicationVers, ApplicationURL, deploymentMethod, UserRoles, UserPermissions, SSLconfig, WebServerType, WebServerVers, VirtualHostConfig, VendorContact, SupportContDetails, DBconnectdetails, DBnames, CurrentVers, LastUpdate, Monitortools, ifyesExplain, purchasedate, cost)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32)
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
    console.log('Application added successfully with ID:', id);
    return id;
  }
  catch (err) {
    console.error(err);
    console.log("Not added ");
  }
}////////////////////////////////////////////////////////////////

 
 async get(Id) {
  
}
 

async getAll() {
 
}

async delete(Id) {
  
}

async update(Id, Data) {
  
}

}
  
module.exports = ApplicationRepository;



