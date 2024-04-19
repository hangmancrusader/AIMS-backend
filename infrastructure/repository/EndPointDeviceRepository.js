const port = 8080
const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class EndPointDeviceRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
 
  async add(data) {
    try
    {
    const query = `
    INSERT INTO endpointdevice (
      VoIPID,
      laptopID,
      printerID,
      mobilephID
    ) 
    VALUES (
      $1, $2, $3, $4
    ) 
    RETURNING id;
    
      

    `;
    const values = [
      data.VoIPID,
      data.laptopID,
      data.printerID,
      data.mobilephID
    ];
    
    
    
    
  
    const result = await this.pool.query(query, values);
    console.log("Asset added successfully");    
    const id = result.rows[0].id;
    console.log('Asset added successfully with ID:', id);
    return id;
  }
  catch (err) {
    console.error(err);
    console.log("Not added ");
  }
}//////////
 
 async get(Id) {
  
}
 

async getAll() {
  const query = 'SELECT * FROM endpointdevice';

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
module.exports = EndPointDeviceRepository;