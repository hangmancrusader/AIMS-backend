
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
 
  async add(data) {
    try
    {
    const query = `
    INSERT INTO hosting ( vmID,hostname, CloudProv, CloudPlan, SLAdeets, CPAccessURL, CPLoginUserName, CPLoginUserPassword, SSHhn, BillingCycle, NextRenewaldate, BilingContact, BackupFreq, TimeforBACKUP, Timingsfrom, TimingsTo, SSLcertif, CertifExpiry, TechSupportContact, EmergencyContact, SubscriptionStartDate, SubscriptionEnddate, MonthlyCost, AccountID, Hypervisortype, VersionHV, HostHV)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26,$27)
    RETURNING id;
    `;
    const values = [
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
    
    
  
    const result = await this.pool.query(query, values);
    console.log("Hosting added successfully");    
    const id = result.rows[0].id;
    console.log('Hosting added successfully with ID:', id);
    return id;
  }
  catch (err) {
    console.error(err);
    console.log("Not added ");
  }
}////////////////////////////////////////////////////////////////

 
 async get(Id) {
  const query = 'SELECT * FROM hosting WHERE id = $1';
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
  const query = 'SELECT * FROM hosting;';

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

async update(Id, Data) {
  
}

}
  
module.exports = HostingRepository;



