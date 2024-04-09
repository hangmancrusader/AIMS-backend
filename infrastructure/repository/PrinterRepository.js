//const { Pool } = require('pg');
const port = 8080
const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class PrinterRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
 
  async add(data) {
    try
    {
      const query = `
      INSERT INTO printer ( Assetname, SerialNumber, AssetBarcode, Currentlocation, Dept, "Condition", Status, Returndate, purchasedate, cost, warrantyinfo, AssignmentHistory, Manufacturer, ModelNo, "Desc", OS, Port, assigneduser, lastdeptacquired, installedsSW, Licenses, deployement_method, decomissiondate, serviceProv, MaintainceHist)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25)
      RETURNING id;
      `;
      const values = [
        data.Assetname,
        data.SerialNumber,
        data.AssetBarcode,
        data.Currentlocation,
        data.Dept,
        data.Condition,
        data.Status,
        data.Returndate,
        data.purchasedate,
        data.cost,
        data.warrantyinfo,
        data.AssignmentHistory,
        data.Manufacturer,
        data.ModelNo,
        data.Desc,
        data.OS,
        data.Port,
        data.assigneduser,
        data.lastdeptacquired,
        data.installedsSW,
        data.Licenses,
        data.deployement_method,
        data.decomissiondate,
        data.serviceProv,
        data.MaintainceHist
      ];
      
      
  
      const result = await this.pool.query(query, values);
      console.log("Printer added successfully");    
      const id = result.rows[0].id;
      console.log('Printer added successfully with ID:', id);
      return id;
    }
    catch (err) {
      console.error(err);
      console.log("Not added ");
    }
      
 }//////////////////////////////////////////////////////////////////

 
 async get(Id) {
  
}
 

async getAll() {
 
}

async delete(Id) {
  
}

async update(Id, rData) {
  
}

}
  
module.exports = PrinterRepository;



