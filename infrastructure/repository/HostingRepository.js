const connectionOptions = require("../connection/db.js");
const express = require("express");
const app = express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class HostingRepository {
  constructor() {
    this.pool = connectionOptions;
  }

  // class functionss

  async add(data) {
    try {
      const query = `
    INSERT INTO hosting ( hostname, CloudProv, CloudPlan, SLAdeets, CPAccessURL, CPLoginUserName, CPLoginUserPassword, SSHhn, BillingCycle, NextRenewaldate, BilingContact, BackupFreq, TimeforBACKUP, Timingsfrom, TimingsTo, SSLcertif, CertifExpiry, TechSupportContact, EmergencyContact, SubscriptionStartDate, SubscriptionEnddate, MonthlyCost, AccountID, Hypervisortype, VersionHV, HostHV)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26)
    RETURNING id;
    `;
      const values = [
        data.hostname,
        data.CloudProv,
        data.CloudPlan,
        data.SLAdeets,
        data.CPAccessURL,
        data.CPLoginUserName,
        data.CPLoginUserPassword,
        data.SSHhn,
        data.BillingCycle,
        data.NextRenewaldate,
        data.BilingContact,
        data.BackupFreq,
        data.TimeforBACKUP,
        data.Timingsfrom,
        data.TimingsTo,
        data.SSLcertif,
        data.CertifExpiry,
        data.TechSupportContact,
        data.EmergencyContact,
        data.SubscriptionStartDate,
        data.SubscriptionEnddate,
        data.MonthlyCost,
        data.AccountID,
        data.Hypervisortype,
        data.VersionHV,
        data.HostHV
      ];

      const result = await this.pool.query(query, values);
      console.log("Hosting added successfully");
      const id = result.rows[0].id;
      console.log("Hosting added successfully with ID:", id);
      return id;
    } catch (err) {
      console.error(err);
      console.log("Not added ");
      return "error";
    }
  } ////////////////////////////////////////////////////////////////

  async get(Id) {
    const query = `SELECT *,
    TO_CHAR(NextRenewaldate, 'yyyy-MM-dd') AS NextRenewalDate,
    TO_CHAR(CertifExpiry, 'yyyy-MM-dd') AS CertifExpiry,
    TO_CHAR(SubscriptionStartDate, 'yyyy-MM-dd') AS SubscriptionStartDate,
    TO_CHAR(SubscriptionEnddate, 'yyyy-MM-dd') AS SubscriptionEnddate FROM hosting WHERE id = $1;
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
    const query = `SELECT *,
    TO_CHAR(NextRenewaldate, 'yyyy-MM-dd') AS NextRenewalDate,
    TO_CHAR(CertifExpiry, 'yyyy-MM-dd') AS CertifExpiry,
    TO_CHAR(SubscriptionStartDate, 'yyyy-MM-dd') AS SubscriptionStartDate,
    TO_CHAR(SubscriptionEnddate, 'yyyy-MM-dd') AS SubscriptionEnddate FROM hosting;
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
    const query = "DELETE FROM hosting WHERE id = $1 RETURNING id;";
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
    UPDATE hosting
    SET
      vmID = COALESCE($2, vmID),
      hostname = COALESCE($3, hostname),
      CloudProv = COALESCE($4, CloudProv),
      CloudPlan = COALESCE($5, CloudPlan),
      SLAdeets = COALESCE($6, SLAdeets),
      CPAccessURL = COALESCE($7, CPAccessURL),
      CPLoginUserName = COALESCE($8, CPLoginUserName),
      CPLoginUserPassword = COALESCE($9, CPLoginUserPassword),
      SSHhn = COALESCE($10, SSHhn),
      BillingCycle = COALESCE($11, BillingCycle),
      NextRenewaldate = COALESCE($12, NextRenewaldate),
      BilingContact = COALESCE($13, BilingContact),
      BackupFreq = COALESCE($14, BackupFreq),
      TimeforBACKUP = COALESCE($15, TimeforBACKUP),
      Timingsfrom = COALESCE($16, Timingsfrom),
      TimingsTo = COALESCE($17, TimingsTo),
      SSLcertif = COALESCE($18, SSLcertif),
      CertifExpiry = COALESCE($19, CertifExpiry),
      TechSupportContact = COALESCE($20, TechSupportContact),
      EmergencyContact = COALESCE($21, EmergencyContact),
      SubscriptionStartDate = COALESCE($22, SubscriptionStartDate),
      SubscriptionEnddate = COALESCE($23, SubscriptionEnddate),
      MonthlyCost = COALESCE($24, MonthlyCost),
      AccountID = COALESCE($25, AccountID),
      Hypervisortype = COALESCE($26, Hypervisortype),
      VersionHV = COALESCE($27, VersionHV),
      HostHV = COALESCE($28, HostHV)
    WHERE
      id = $1
    RETURNING id;
    
    `;
    const values = [
      Id,
      data.vmID,
      data.hostname,
      data.CloudProv,
      data.CloudPlan,
      data.SLAdeets,
      data.CPAccessURL,
      data.CPLoginUserName,
      data.CPLoginUserPassword,
      data.SSHhn,
      data.BillingCycle,
      data.NextRenewaldate,
      data.BilingContact,
      data.BackupFreq,
      data.TimeforBACKUP,
      data.Timingsfrom,
      data.TimingsTo,
      data.SSLcertif,
      data.CertifExpiry,
      data.TechSupportContact,
      data.EmergencyContact,
      data.SubscriptionStartDate,
      data.SubscriptionEnddate,
      data.MonthlyCost,
      data.AccountID,
      data.Hypervisortype,
      data.VersionHV,
      data.HostHV
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

module.exports = HostingRepository;
