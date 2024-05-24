const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class SecuritySolutionRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
      const query = `
  INSERT INTO securitysolution (
    product_name,
    vendor,
    subscriptionID,
    license_expiry_date,
    current_version,
    last_updated,
    deployement_method,
    policy_settings,
    exclusion_list,
    logging_config,
    even_log_storage_location,
    scan_frequency,
    scan_time,
    scan_custom_config,
    integration_SEM,
    integration_EP_management,
    threat_feeds,
    ioc_management,
    vendor_contact,
    documentation_links,
    purchase_date,
    cost
  ) 
  VALUES (
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, 
    $17, $18, $19, $20, $21, $22
  ) 
  RETURNING id;
  
  `;
      const values = [
        data.product_name,
        data.vendor,
        data.subscriptionID,
        data.license_expiry_date,
        data.current_version,
        data.last_updated,
        data.deployement_method,
        data.policy_settings,
        data.exclusion_list,
        data.logging_config,
        data.even_log_storage_location,
        data.scan_frequency,
        data.scan_time,
        data.scan_custom_config,
        data.integration_SEM,
        data.integration_EP_management,
        data.threat_feeds,
        data.ioc_management,
        data.vendor_contact,
        data.documentation_links,
        data.purchase_date,
        data.cost
      ];

      const result = await this.pool.query(query, values);
      console.log("SecSol added successfully");
      const id = result.rows[0].id;
      console.log("SecSol added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added ");
      return "error";
    }
  } ////////////////////////////////////////////////////////////////

  async get(Id) {
    const query = `SELECT * ,
    TO_CHAR(license_expiry_date, 'yyyy-MM-dd') AS license_expiry_date,
    TO_CHAR(purchase_date, 'yyyy-MM-dd') AS purchase_date FROM securitysolution WHERE id =$1;
    `;
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
    const query = `SELECT * ,
    TO_CHAR(license_expiry_date, 'yyyy-MM-dd') AS license_expiry_date,
    TO_CHAR(purchase_date, 'yyyy-MM-dd') AS purchase_date FROM securitysolution;
    `;

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async delete(Id) {
    const query = "DELETE FROM securitysolution WHERE id = $1 RETURNING id;";
    const values = [Id];

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
  }

  async update(Id, data) {
    const query = `
  UPDATE securitysolution
SET 
    product_name = $2,
    vendor = $3,
    subscriptionID = $4,
    license_expiry_date = $5,
    current_version = $6,
    last_updated = $7,
    deployement_method = $8,
    policy_settings = $9,
    exclusion_list = $10,
    logging_config = $11,
    even_log_storage_location = $12,
    scan_frequency = $13,
    scan_time = $14,
    scan_custom_config = $15,
    integration_SEM = $16,
    integration_EP_management = $17,
    threat_feeds = $18,
    ioc_management = $19,
    vendor_contact = $20,
    documentation_links = $21,
    purchase_date = $22,
    cost = $23
WHERE 
    id = $1
RETURNING id;

  
    `;
    const values = [
      Id,
      data.product_name,
      data.vendor,
      data.subscriptionID,
      data.license_expiry_date,
      data.current_version,
      data.last_updated,
      data.deployement_method,
      data.policy_settings,
      data.exclusion_list,
      data.logging_config,
      data.even_log_storage_location,
      data.scan_frequency,
      data.scan_time,
      data.scan_custom_config,
      data.integration_SEM,
      data.integration_EP_management,
      data.threat_feeds,
      data.ioc_management,
      data.vendor_contact,
      data.documentation_links,
      data.purchase_date,
      data.cost
    ];

    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows;
    } finally {
      client.release();
    }
  }
}
module.exports = SecuritySolutionRepository;
