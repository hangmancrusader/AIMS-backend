const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class AssetRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
 
  async add(data) {
    try
    {
    const query = `
    INSERT INTO asset (
        hostingID,
        vmID,
        endpointdevID,
        appID,
        serviceID,
        netdevID,
        secsolID
      ) 
      VALUES (
        $1, $2, $3, $4, $5, $6, $7
      ) 
      RETURNING id;
      

    `;
    const values = [
        data.hostingID,
        data.vmID,
        data.endpointdevID,
        data.appID,
        data.serviceID,
        data.netdevID,
        data.secsolID
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
}////////////////////////////////////////////////////////////////

 
 async get(Id) {
  const query = 'SELECT * FROM asset WHERE id = $1';
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
  const query = 'SELECT * FROM asset;';

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

async update(Id, data) {
  const query = `
  UPDATE asset
SET 
    hostingID = $1,
    vmID = $2,
    endpointdevID = $3,
    appID = $4,
    serviceID = $5,
    netdevID = $6,
    secsolID = $7
WHERE
    id = $8;

`;
const values = [
  Id,
  data.hostingID,
        data.vmID,
        data.endpointdevID,
        data.appID,
        data.serviceID,
        data.netdevID,
        data.secsolID
];
const client = await this.pool.connect();
try {
const result = await client.query(query,values);
return result.rows;
} finally {
  client.release();
}
}

}
  
module.exports = AssetRepository;



