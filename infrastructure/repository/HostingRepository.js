//const { Pool } = require('pg');
const port = 8080
const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class HostingRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
 
 async add(Data) {
    
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
  
module.exports = HostingRepository;



