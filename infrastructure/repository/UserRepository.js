//const { Pool } = require('pg');
const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class UserRepository {
  constructor() {
    //this.pool = new Pool(connectionOptions);
    this.pool = connectionOptions;
  }
  

  // class functionss
  //add user
  async addUser(user) {
    console.log(user);
    //create user Table first
    try {
      const checkTableExistsQuery = `
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.tables
        WHERE table_name = 'users'
      );
    `;
      const tableExistsResult = await this.pool.query(checkTableExistsQuery);
      if (!tableExistsResult.rows[0].exists)
        try {
          const query = `
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        department VARCHAR(50),
        securityClearance BOOLEAN NOT NULL,
        contactNo VARCHAR(20),
        email VARCHAR(100) UNIQUE NOT NULL,
        team INTEGER,
        currentPassword VARCHAR(255) NOT NULL, 
        newPassword VARCHAR(255),
        MFAuth VARCHAR(255),
        userIdStatus VARCHAR(20) NOT NULL CHECK (userIdStatus IN ('active', 'inactive'))
      );
      `;
          await this.pool.query(query);
          console.log("User table created");
        } catch (err) {
          console.error(err);
          console.error("User table creation failed");
        }
      else {
        console.log("User table already exists");
      }
    } catch (err) {
      console.error(err);
    }

    try {
      const query = `
      INSERT INTO users (firstname, lastname, department, securityClearance, contactNo, email, team, currentPassword, newPassword, MFAuth, userIdStatus) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      `;
      const values = [
        user.firstname,
        user.lastname,
        user.department,
        user.securityClearance,
        user.contactNo,
        user.email,
        user.team,
        user.currentPassword,
        user.newPassword,
        user.MFAuth,
        user.userIdStatus
      ];

      const result = await this.pool.query(query, values);
      console.log("User added successfully");
    } catch (err) {
      console.error(err);
      //console.log("User not added ");
      return "User not added";
    }
  } //end of addUser function

  async addUserwithPic(user) {
    console.log(user);
    //create user Table first
    try {
      const checkTableExistsQuery = `
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.tables
        WHERE table_name = 'users'
      );
    `;
      const tableExistsResult = await this.pool.query(checkTableExistsQuery);
      if (!tableExistsResult.rows[0].exists)
        try {
          const query = `
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        department VARCHAR(50),
        securityClearance BOOLEAN NOT NULL,
        contactNo VARCHAR(20),
        email VARCHAR(100) UNIQUE NOT NULL,
        team INTEGER,
        currentPassword VARCHAR(255) NOT NULL, 
        newPassword VARCHAR(255),
        MFAuth VARCHAR(255),
        userIdStatus VARCHAR(20) NOT NULL CHECK (userIdStatus IN ('active', 'inactive')),
        profilepic BYTEA
        
      );
      `;
          await this.pool.query(query);
          console.log("User table created");
        } catch (err) {
          console.error(err);
          console.error("User table creation failed");
        }
      else {
        console.log("User table already exists");
      }
    } catch (err) {
      console.error(err);
    }

    try {
      const query = `
        INSERT INTO users 
        (firstname, lastname, department, securityClearance, contactNo, email, team, currentPassword, newPassword, MFAuth, userIdStatus, profilepic, assetID, roleID, serviceID) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,$12, $13, $14,$15) 
        RETURNING id;
      `;
      const values = [
        user.firstname,
        user.lastname,
        user.department,
        user.securityClearance,
        user.contactNo,
        user.email,
        user.team,
        user.currentPassword,
        user.newPassword,
        user.MFAuth,
        user.userIdStatus,
        user.profilepic,
        user.assetID,
        user.roleID,
        user.serviceID
      ];

      const result = await this.pool.query(query, values);
      console.log("User added successfully");
      const id = result.rows[0].id;
      return id;
    } catch (err) {
      console.error(err);
      console.log("User not added ");
      return "error";
    }
  }

  //get user
  async getUser(userId) {
    const query = "SELECT * FROM users WHERE id = $1";
    const values = [userId];

    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  } //end of getUser function

  //get all users
  async getAllUsers() {
    const query = "SELECT * FROM users";

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  } //end of getAllUsers

  //delete user
  async deleteUser(userId) {
    const query = "DELETE FROM users WHERE id = $1 RETURNING id;";
    const values = [userId];

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
  } //end of deleteUser function

  async updateUser(userId, userData) {
    const query = `
    UPDATE users
    SET
    firstname = COALESCE($2, firstname),
    lastname = COALESCE($3, lastname),
    department = COALESCE($4, department),
    securityClearance = COALESCE($5, securityClearance),
    contactNo = COALESCE($6, contactNo),
    email = COALESCE($7, email),
    team = COALESCE($8, team),
    currentPassword = COALESCE($9, currentPassword),
    newPassword = COALESCE($10, newPassword),
    MFAuth = COALESCE($11, MFAuth),
    userIdStatus = COALESCE($12, userIdStatus),
    profilepic = COALESCE($13, profilepic),
    assetID = COALESCE($14, assetID),
    roleID = COALESCE($15, roleID),
    serviceID = COALESCE($16, serviceID)
    WHERE id = $1
   RETURNING id;
    `;
    const values = [
      userId,
      userData.firstname,
      userData.lastname,
      userData.department,
      userData.securityClearance,
      userData.contactNo,
      userData.email,
      userData.team,
      userData.currentPassword,
      userData.newPassword,
      userData.MFAuth,
      userData.userIdStatus,
      userData.profilepic,
      userData.assetID,
      userData.roleID,
      userData.serviceID
    ];
    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      const id = result.rows[0].id;
      return id;
    } finally {
      client.release();
    }
  }

  async getUserByEmail(email) {
    const query = "SELECT currentpassword FROM users WHERE email = $1";
    const values = [email];

    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }
  async getUserByEmailforAuth(email) {
    const query = "SELECT id, currentpassword FROM users WHERE email = $1";
    const values = [email];

    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }
  async getUserHashforAuth(email) {
    const query =
      "SELECT id, currentpassword,roleid FROM users WHERE email = $1";
    const values = [email]; //value for email from request

    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  async resetPassword(id, userData) {
    const query = `
      UPDATE users
      SET
      currentPassword = $2,
      newPassword = $3     
      WHERE id = $1
      RETURNING id;
    `;
    const values = [id, userData.currentPassword, userData.newPassword];

    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      const id = result.rows[0].id;
      return id;
    } finally {
      client.release();
    }
  }

  async assignedRole(roleId) {
    const query = "SELECT TypeofRole FROM role WHERE id = $1";
    const values = [roleId];

    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }
}

module.exports = UserRepository;
