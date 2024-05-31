const port = 8080;
const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class EndPointDeviceRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
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
      console.log("Asset added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added ");
      return "error";
    }
  } //////////

  async get(Id) {}

  async getAll() {
    const query = "SELECT * FROM endpointdevice";

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async delete(Id) {}

  async update(Id, data) {
    const query = `
      UPDATE endpointdevice
    SET 
        VoIPID = $1,
        laptopID = $2,
        printerID = $3,
        mobilephID = $4
    WHERE
        id = $5;

    `;
    const values = [
      Id,
      data.VoIPID,
      data.laptopID,
      data.printerID,
      data.mobilephID
    ];
    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async getcount() {
    const query = `SELECT
    (SELECT COUNT(*) FROM laptop) AS laptop_count,
    (SELECT COUNT(*) FROM printer) AS printer_count,
    (SELECT COUNT(*) FROM voip) AS voip_count,
    (SELECT COUNT(*) FROM mobilephone) AS mobilephone_count;`;

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }
  async getperct() {
    const query = `
    WITH total_counts AS (
      SELECT 
        (SELECT COUNT(*) FROM laptop) AS laptop_count,
        (SELECT COUNT(*) FROM printer) AS printer_count,
        (SELECT COUNT(*) FROM voip) AS voip_count,
        (SELECT COUNT(*) FROM mobilephone) AS mobilephone_count
    ),
    total_sum AS (
      SELECT 
        (laptop_count + printer_count + voip_count + mobilephone_count) AS total_count
      FROM total_counts
    )
    SELECT
      ROUND((SELECT laptop_count FROM total_counts) * 100.0 / (SELECT total_count FROM total_sum), 2) AS laptop_percent,
      ROUND((SELECT printer_count FROM total_counts) * 100.0 / (SELECT total_count FROM total_sum), 2) AS printer_percent,
      ROUND((SELECT voip_count FROM total_counts) * 100.0 / (SELECT total_count FROM total_sum), 2) AS voip_percent,
      ROUND((SELECT mobilephone_count FROM total_counts) * 100.0 / (SELECT total_count FROM total_sum), 2) AS mobilephone_percent;
    `;

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async getcost() {
    const query = `
    SELECT
    SUM(CASE WHEN l.cost IS NOT NULL THEN l.cost ELSE 0 END) AS laptop_cost,
    SUM(CASE WHEN p.cost IS NOT NULL THEN p.cost ELSE 0 END) AS printer_cost,
    SUM(CASE WHEN v.cost IS NOT NULL THEN v.cost ELSE 0 END) AS voip_cost,
    SUM(CASE WHEN m.cost IS NOT NULL THEN m.cost ELSE 0 END) AS mobilephone_cost
  FROM laptop l
  FULL JOIN printer p ON 1 = 1  -- Assuming no related table for printers
  FULL JOIN voip v ON 1 = 1      -- Assuming no related table for VoIP
  FULL JOIN mobilephone m ON 1 = 1;  -- Assuming no related table for mobile phones
  `;

    const client = await this.pool.connect();
    try {
      const result = await client.query(query);
      return result.rows;
    } finally {
      client.release();
    }
  }
}
module.exports = EndPointDeviceRepository;
