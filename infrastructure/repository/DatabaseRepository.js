//const { Pool } = require('pg');
const port = 8080
const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class DatabaseRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
 
  async add(data) {
    try
    {
    const query = `
    INSERT INTO database (
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
      $21, $22
    )
    RETURNING id;
    `;
    const values = [
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
    console.log('Database added successfully with ID:', id);
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
  
module.exports = DatabaseRepository;



