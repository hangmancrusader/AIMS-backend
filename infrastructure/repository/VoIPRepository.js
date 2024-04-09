//const { Pool } = require('pg');
const port = 8080
const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class VoIPRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
 
  async add(data) {
    try
    {
      const query = `
      INSERT INTO voip (Assetname, SerialNumber, Assigneduser, AssetBarcode, DescriptionandSpecs, OSVersion, Processor, RAM, Storage, Screensize, Currentlocation, Dept, "Condition", Status, Returndate, purchasedate, cost, warrantyinfo, IPAddress, macaddress, AssignmentHistory, depmethod, decomissiondate, serviceProv, BackupFreq, "Method", integrationwithtools, mentionif, Snapshotinfo)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29)
RETURNING id;

      `;
      const values = [
        data.Assetname,
        data.SerialNumber,
        data.Assigneduser,
        data.AssetBarcode,
        data.DescriptionandSpecs,
        data.OSVersion,
        data.Processor,
        data.RAM,
        data.Storage,
        data.Screensize,
        data.Currentlocation,
        data.Dept,
        data.Condition,
        data.Status,
        data.Returndate,
        data.purchasedate,
        data.cost,
        data.warrantyinfo,
        data.IPAddress,
        data.macaddress,
        data.AssignmentHistory,
        data.depmethod,
        data.decomissiondate,
        data.serviceProv,
        data.BackupFreq,
        data.Method,
        data.integrationwithtools,
        data.mentionif,
        data.Snapshotinfo
      ];
      
      
  
      const result = await this.pool.query(query, values);
      console.log("Voip added successfully");    
      const id = result.rows[0].id;
      console.log('Voip added successfully with ID:', id);
      return id;
    }
    catch (err) {
      console.error(err);
      console.log("Not added ");
    }
      
    }//

 
 async get(Id) {
  
}
 

async getAll() {
 
}

async delete(Id) {
  
}

async update(Id, rData) {
  
}

}
  
module.exports = VoIPRepository;



