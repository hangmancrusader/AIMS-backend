//const { Pool } = require('pg');
const port = 8080
const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class RoleRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  

  // class functionss
  //add user role
 async addRole(role) {
    try{ 
      const checkTableExistsQuery = `
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.tables
        WHERE table_name = 'role'
      );
    `;
    const tableExistsResult = await this.pool.query(checkTableExistsQuery);
    if (!tableExistsResult.rows[0].exists) 
    try {
      const query = `
        CREATE TABLE role (
        id SERIAL PRIMARY KEY,
        TypeofRole VARCHAR(255) NOT NULL UNIQUE        
      );
      `;
      await this.pool.query(query);
      console.log('Role table created');
    } catch (err) {
      console.error(err);
      console.error('Role table creation failed');
    }
    else{
      console.log("Role table already exists");
    }
  }
  catch (err){
    console.error(err);
  }
    
   try {
      const query = `
      INSERT INTO role (TypeofRole) VALUES ($1)
      RETURNING id;
      `;
      const values = [role.TypeofRole];
  
      const result = await this.pool.query(query, values);
      console.log("Role added successfully");    
      const roleId = result.rows[0].id;
      console.log('Role added successfully with ID:', roleId);
      return roleId;
      
    } catch (err) {
      console.error(err);
      console.log("Role not added ");
    }
  }////////////////////////////////////////////////////////////////

 
 async getRole(roleId) {
  const query = 'SELECT * FROM role WHERE id = $1';
  const values = [roleId];

  const client = await this.pool.connect();
  try {
    const result = await client.query(query, values);
    return result.rows[0];
  } finally {
    client.release();
  }
}
 

async getAllRoles() {
  const query = 'SELECT * FROM role';

  const client = await this.pool.connect();
  try {
    const result = await client.query(query);
    return result.rows;
  } finally {
    client.release();
  }
}

async deleteRole(roleId) {
  const query = 'DELETE FROM role WHERE id = $1';
  const values = [roleId];

  const client = await this.pool.connect();
  try {
    await client.query(query, values);
  } finally {
    client.release();
  }
}

async updateRole(roleId, roleData) {
  const query = `
    UPDATE role
    SET
     TypeofRole = $2,
    WHERE id = $1
  `;
  const values = 
  [
    roleId,
    roleData.TypeofRole 
  ];

  const client = await this.pool.connect();
  try {
    await client.query(query, values);
  } finally {
    client.release();
  }
}
}
  
module.exports = RoleRepository;



