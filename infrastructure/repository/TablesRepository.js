//const { Pool } = require('pg');
const port = 8080
const connectionOptions = require('../connection/db.js')
const express = require('express')
const app =express();
app.use(express.json());
//the connectoptions will be initilized with dbconfig when dbconfig is imported in index.js
class TablesRepository {
  constructor() {
    this.pool = connectionOptions;
  }
  
//this repo is only for managing DB tables and their coolumns
async createHosting()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'hosting'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE hosting (
      id SERIAL PRIMARY KEY    
    );
    `;
    await this.pool.query(query);
    console.log('Hosting table created');
  } catch (err) {
    console.error(err);
    console.error('Hosting table creation failed');
  }
  else{
    console.log("Hositng table already exists");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async createVM()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'virtualmachine'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE virtualmachine (
      id SERIAL PRIMARY KEY         
    );
    `;
    await this.pool.query(query);
    console.log('VM table created');
  } catch (err) {
    console.error(err);
    console.error('VM table creation failed');
  }
  else{
    console.log("VM table already exists");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async createDatabase()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'database'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE database (
      id SERIAL PRIMARY KEY         
    );
    `;
    await this.pool.query(query);
    console.log('Database table created');
  } catch (err) {
    console.error(err);
    console.error('Database table creation failed');
  }
  else{
    console.log("Database table already exists");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////


async createNetDev()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'networkdevice'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE networkdevice (
      id SERIAL PRIMARY KEY         
    );
    `;
    await this.pool.query(query);
    console.log('networkdevice table created');
  } catch (err) {
    console.error(err);
    console.error('networkdevice table creation failed');
  }
  else{
    console.log("networkdevice table already exists");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async createApplication()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'application'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE application (
      id SERIAL PRIMARY KEY         
    );
    `;
    await this.pool.query(query);
    console.log('application table created');
  } catch (err) {
    console.error(err);
    console.error('application table creation failed');
  }
  else{
    console.log("application table already exists");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async createService()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'service'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE service (
      id SERIAL PRIMARY KEY         
    );
    `;
    await this.pool.query(query);
    console.log('service table created');
  } catch (err) {
    console.error(err);
    console.error('service table creation failed');
  }
  else{
    console.log("service table already exists");
  }
}
catch (err){
  console.error(err);
}
}

async createLaptop()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'laptop'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE laptop (
      id SERIAL PRIMARY KEY         
    );
    `;
    await this.pool.query(query);
    console.log('laptop table created');
  } catch (err) {
    console.error(err);
    console.error('laptop table creation failed');
  }
  else{
    console.log("laptop table already exists");
  }
}
catch (err){
  console.error(err);
}
}

async createPrinter()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'printer'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE printer (
      id SERIAL PRIMARY KEY         
    );
    `;
    await this.pool.query(query);
    console.log('printer table created');
  } catch (err) {
    console.error(err);
    console.error('printer table creation failed');
  }
  else{
    console.log("printer table already exists");
  }
}
catch (err){
  console.error(err);
}
}

async createMphone()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'mobilephone'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE mobilephone (
      id SERIAL PRIMARY KEY         
    );
    `;
    await this.pool.query(query);
    console.log('mobilephone table created');
  } catch (err) {
    console.error(err);
    console.error('mobilephone table creation failed');
  }
  else{
    console.log("mobilephone table already exists");
  }
}
catch (err){
  console.error(err);
}
}

async createVOIP()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'voip'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE voip (
      id SERIAL PRIMARY KEY         
    );
    `;
    await this.pool.query(query);
    console.log('voip table created');
  } catch (err) {
    console.error(err);
    console.error('voip table creation failed');
  }
  else{
    console.log("voip table already exists");
  }
}
catch (err){
  console.error(err);
}
}

async createSecSol()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'securitysolution'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE securitysolution (
      id SERIAL PRIMARY KEY         
    );
    `;
    await this.pool.query(query);
    console.log('securitysolution table created');
  } catch (err) {
    console.error(err);
    console.error('securitysolution table creation failed');
  }
  else{
    console.log("securitysolution table already exists");
  }
}
catch (err){
  console.error(err);
}
}

async createTicket()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'ticket'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE ticket (
      id SERIAL PRIMARY KEY         
    );
    `;
    await this.pool.query(query);
    console.log('ticket table created');
  } catch (err) {
    console.error(err);
    console.error('ticket table creation failed');
  }
  else{
    console.log("ticket table already exists");
  }
}
catch (err){
  console.error(err);
}
}

async createAsset()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'asset'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE asset (
      id SERIAL PRIMARY KEY    
    );
    `;
    await this.pool.query(query);
    console.log('asset table created');
  } catch (err) {
    console.error(err);
    console.error('asset table creation failed');
  }
  else{
    console.log("asset table already exists");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async createEndPointDev()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'endpointdevice'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (!tableExistsResult.rows[0].exists) 
  try {
    const query = `
      CREATE TABLE endpointdevice (
      id SERIAL PRIMARY KEY    
    );
    `;
    await this.pool.query(query);
    console.log('endpointdevice table created');
  } catch (err) {
    console.error(err);
    console.error('endpointdevice table creation failed');
  }
  else{
    console.log("endpointdevice table already exists");
  }
}
catch (err){
  console.error(err);
}
}///

async alterAsset()//done
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'asset'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE asset
    ADD COLUMN hostingID SERIAL REFERENCES hosting(id),
    ADD COLUMN vmID SERIAL REFERENCES virtualmachine(id),
    ADD COLUMN endpointdevID SERIAL REFERENCES endpointdevice(id),
    ADD COLUMN appID SERIAL REFERENCES application(id),
    ADD COLUMN serviceID SERIAL REFERENCES service(id),
    ADD COLUMN netdevID SERIAL REFERENCES networkdevice(id),
    ADD COLUMN secsolID SERIAL REFERENCES securitysolution(id);
    `;
    await this.pool.query(query);
    console.log('asset table altered');
  } catch (err) {
    console.error(err);
    console.error('asset table creation failed');
  }
  else{
    console.log("asset table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterHosting()//done
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'hosting'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE hosting
    
    ADD COLUMN vmID SERIAL REFERENCES virtualmachine(id),
    ADD COLUMN hostname VARCHAR,
    ADD COLUMN CloudProv VARCHAR,
    ADD COLUMN CloudPlan VARCHAR,
    ADD COLUMN SLAdeets VARCHAR,
    ADD COLUMN CPAccessURL VARCHAR,
    ADD COLUMN CPLoginUserName VARCHAR,
    ADD COLUMN CPLoginUserPassword VARCHAR,
    ADD COLUMN SSHhn VARCHAR,
    ADD COLUMN BillingCycle VARCHAR,
    ADD COLUMN NextRenewaldate DATE,
    ADD COLUMN BilingContact VARCHAR,
    ADD COLUMN BackupFreq VARCHAR,
    ADD COLUMN TimeforBACKUP TIME,
    ADD COLUMN Timingsfrom TIME,
    ADD COLUMN TimingsTo TIME,
    ADD COLUMN SSLcertif VARCHAR,
    ADD COLUMN CertifExpiry DATE,
    ADD COLUMN TechSupportContact VARCHAR,
    ADD COLUMN EmergencyContact VARCHAR,
    ADD COLUMN SubscriptionStartDate DATE,
    ADD COLUMN SubscriptionEnddate DATE,
    ADD COLUMN MonthlyCost DECIMAL,
    ADD COLUMN AccountID VARCHAR,
    ADD COLUMN Hypervisortype VARCHAR,
    ADD COLUMN VersionHV VARCHAR,
    ADD COLUMN HostHV VARCHAR;

    `;
    await this.pool.query(query);
    console.log('hosting table altered');
  } catch (err) {
    console.error(err);
    console.error('hosting table alteration failed');
  }
  else{
    console.log("hsoting table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterVM()//add cols
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'virtualmachine'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE virtualmachine
    ADD COLUMN netdevID SERIAL REFERENCES networkdevice(id),
    ADD COLUMN secsolID SERIAL REFERENCES securitysolution(id),
    ADD COLUMN appID SERIAL REFERENCES application(id),
    ADD COLUMN dbID SERIAL REFERENCES database(id),
    ADD COLUMN VMname VARCHAR,
    ADD COLUMN Hostname VARCHAR,
    ADD COLUMN CPUconfig VARCHAR,
    ADD COLUMN AssetBarcode VARCHAR,
    ADD COLUMN StorageConfigSpecs VARCHAR,
    ADD COLUMN type VARCHAR,
    ADD COLUMN version VARCHAR,
    ADD COLUMN host VARCHAR,
    ADD COLUMN OStype VARCHAR,
    ADD COLUMN License VARCHAR,
    ADD COLUMN Firewallconfig VARCHAR,
    ADD COLUMN SecSW VARCHAR,
    ADD COLUMN SecSoln VARCHAR,
    ADD COLUMN Encryption VARCHAR,
    ADD COLUMN IPAddress VARCHAR,
    ADD COLUMN macaddress VARCHAR,
    ADD COLUMN DNS VARCHAR,
    ADD COLUMN Subnet VARCHAR,
    ADD COLUMN Gateway VARCHAR,
    ADD COLUMN deploymentMethod VARCHAR,
    ADD COLUMN decomissionDate DATE,
    ADD COLUMN serviceProv VARCHAR,
    ADD COLUMN SSinfo VARCHAR,
    ADD COLUMN BackupFreq VARCHAR,
    ADD COLUMN "Method" VARCHAR,
    ADD COLUMN integrationwithtools VARCHAR,
    ADD COLUMN mentionif VARCHAR,
    ADD COLUMN Currentlocation VARCHAR,
    ADD COLUMN Dept VARCHAR,
    ADD COLUMN Status VARCHAR,
    ADD COLUMN "Condition" VARCHAR,
    ADD COLUMN purchasedate DATE,
    ADD COLUMN cost DECIMAL;

    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table alteration failed');
  }
  else{
    console.log("asset table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterNetDev()//edited
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'networkdevice'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE networkdevice
    ADD COLUMN DevName VARCHAR,
    ADD COLUMN type VARCHAR,
    ADD COLUMN ModelNo VARCHAR,
    ADD COLUMN PhysicalLoc VARCHAR,
    ADD COLUMN RackandUnit VARCHAR,
    ADD COLUMN FirewallRules VARCHAR,
    ADD COLUMN DetectionSettings VARCHAR,
    ADD COLUMN LoginUN VARCHAR,
    ADD COLUMN LoginPassword VARCHAR,
    ADD COLUMN SSHconfig VARCHAR,
    ADD COLUMN VPNtunnels VARCHAR,
    ADD COLUMN VPNsetting VARCHAR,
    ADD COLUMN RoutingTables VARCHAR,
    ADD COLUMN DynamicRoutingProtocols VARCHAR,
    ADD COLUMN OSVersion VARCHAR,
    ADD COLUMN Lastupdate TIMESTAMP,
    ADD COLUMN HighAvailConfig VARCHAR,
    ADD COLUMN FailOverSettings VARCHAR,
    ADD COLUMN InterfacesConfig VARCHAR,
    ADD COLUMN MACaddress VARCHAR,
    ADD COLUMN PortConfig VARCHAR,
    ADD COLUMN logging_config VARCHAR,
    ADD COLUMN SNMPConfig VARCHAR,
    ADD COLUMN PowerConsumption DECIMAL,
    ADD COLUMN TempEnvControls VARCHAR,
    ADD COLUMN Configfiles VARCHAR,
    ADD COLUMN RunningConfigs VARCHAR,
    ADD COLUMN purchasedate DATE,
    ADD COLUMN Cost DECIMAL,
    ADD COLUMN VendorContact VARCHAR,
    ADD COLUMN SupportContDetails VARCHAR,
    ADD COLUMN Doclink VARCHAR;
    `;
    await this.pool.query(query);
    console.log('table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    console.log(" table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterSecSol()//edited
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'securitysolution'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE securitysolution
    ADD COLUMN product_name VARCHAR,
    ADD COLUMN vendor VARCHAR,
    ADD COLUMN subscriptionID VARCHAR,
    ADD COLUMN license_expiry_date DATE,
    ADD COLUMN current_version VARCHAR,
    ADD COLUMN last_updated TIMESTAMP,
    ADD COLUMN deployement_method VARCHAR,
    ADD COLUMN policy_settings VARCHAR,
    ADD COLUMN exclusion_list VARCHAR,
    ADD COLUMN logging_config VARCHAR,
    ADD COLUMN even_log_storage_location VARCHAR,
    ADD COLUMN scan_frequency VARCHAR,
    ADD COLUMN scan_time VARCHAR,
    ADD COLUMN scan_custom_config VARCHAR,
    ADD COLUMN integration_SEM VARCHAR,
    ADD COLUMN integration_EP_management VARCHAR,
    ADD COLUMN threat_feeds VARCHAR,
    ADD COLUMN ioc_management VARCHAR,
    ADD COLUMN vendor_contact VARCHAR,
    ADD COLUMN documentation_links VARCHAR,
    ADD COLUMN purchase_date DATE,
    ADD COLUMN cost DECIMAL;
    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    console.log(" table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterDatabase()//edited
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'database'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE database
    ADD COLUMN DBServername VARCHAR,
    ADD COLUMN type VARCHAR,
    ADD COLUMN ServerIPAdd VARCHAR,
    ADD COLUMN Virtual_Machine VARCHAR,
    ADD COLUMN DBMStype VARCHAR,
    ADD COLUMN DBMSversion VARCHAR,
    ADD COLUMN instance VARCHAR,
    ADD COLUMN CertifExpiry DATE,
    ADD COLUMN DBNames VARCHAR,
    ADD COLUMN DBowners VARCHAR,
    ADD COLUMN CollationSett VARCHAR,
    ADD COLUMN BackupFreq VARCHAR,
    ADD COLUMN TimeforBACKUP TIME,
    ADD COLUMN RecoveryModel VARCHAR,
    ADD COLUMN BackupStorageLocation VARCHAR,
    ADD COLUMN ClusteringConfig VARCHAR,
    ADD COLUMN ReplicateConfig VARCHAR,
    ADD COLUMN VendorContact VARCHAR,
    ADD COLUMN SupportContDetails VARCHAR,
    ADD COLUMN versionandUpdates VARCHAR,
    ADD COLUMN purchasedate DATE,
    ADD COLUMN cost DECIMAL;

    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    console.log(" table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterApplication()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'application'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE application
    
    ADD COLUMN serviceID SERIAL REFERENCES service(id),
    ADD COLUMN vmID SERIAL REFERENCES virtualmachine(id),
    ADD COLUMN dbID SERIAL REFERENCES database(id),
    ADD COLUMN ServerName VARCHAR,
    ADD COLUMN Servertype VARCHAR,
    ADD COLUMN ServerIPAdd VARCHAR,
    ADD COLUMN Virtual_Machine VARCHAR,
    ADD COLUMN DatabaseServer VARCHAR,
    ADD COLUMN BackupFreq VARCHAR,
    ADD COLUMN BackupMethods VARCHAR,
    ADD COLUMN RecoveryProcedures VARCHAR,
    ADD COLUMN ApplicationName VARCHAR,
    ADD COLUMN ApplicationVers VARCHAR,
    ADD COLUMN ApplicationURL VARCHAR,
    ADD COLUMN deploymentMethod VARCHAR,
    ADD COLUMN UserRoles VARCHAR,
    ADD COLUMN UserPermissions VARCHAR,
    ADD COLUMN SSLconfig VARCHAR,
    ADD COLUMN WebServerType VARCHAR,
    ADD COLUMN WebServerVers VARCHAR,
    ADD COLUMN VirtualHostConfig VARCHAR,
    ADD COLUMN VendorContact VARCHAR,
    ADD COLUMN SupportContDetails VARCHAR,
    ADD COLUMN DBconnectdetails VARCHAR,
    ADD COLUMN DBnames VARCHAR,
    ADD COLUMN CurrentVers VARCHAR,
    ADD COLUMN LastUpdate TIMESTAMP,
    ADD COLUMN Monitortools VARCHAR,
    ADD COLUMN ifyesExplain VARCHAR,
    ADD COLUMN purchasedate DATE,
    ADD COLUMN cost DECIMAL;

    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    console.log(" table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterService()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'service'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE service
    ADD COLUMN servicename VARCHAR,
    ADD COLUMN ServiceCustomer VARCHAR,
    ADD COLUMN ServiceCustodian VARCHAR,
    ADD COLUMN ServiceOwner VARCHAR,
    ADD COLUMN OwnerContInfo VARCHAR,
    ADD COLUMN Configurationfiles VARCHAR,
    ADD COLUMN CustomizationOptions VARCHAR,
    ADD COLUMN BriefDescription VARCHAR,
    ADD COLUMN detailedDesc VARCHAR,
    ADD COLUMN DeployDate DATE,
    ADD COLUMN RolloutPlandetails VARCHAR,
    ADD COLUMN SecProtocols VARCHAR,
    ADD COLUMN SerCreationDate DATE,
    ADD COLUMN SerDecommDate DATE,
    ADD COLUMN ServiceCategory VARCHAR,
    ADD COLUMN ServiceClass VARCHAR,
    ADD COLUMN SLAdeets TEXT, 
    ADD COLUMN SLAExpiryDate DATE,
    ADD COLUMN VendorContact VARCHAR,
    ADD COLUMN SupportContDetails VARCHAR,
    ADD COLUMN AccessReq VARCHAR,
    ADD COLUMN AuthMethods VARCHAR,
    ADD COLUMN purchasedate DATE,
    ADD COLUMN Cost DECIMAL,
    ADD COLUMN DependencyServ VARCHAR,
    ADD COLUMN DependentServ VARCHAR,
    ADD COLUMN Applications VARCHAR,
    ADD COLUMN Databases VARCHAR;

    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    console.log(" table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterTicket()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'ticket'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE ticket
    ADD COLUMN userid SERIAL REFERENCES users(id),
    ADD COLUMN assetid SERIAL REFERENCES asset(id),
    ADD COLUMN flag VARCHAR,
    ADD COLUMN status VARCHAR,
    ADD COLUMN title VARCHAR,
    ADD COLUMN lastupdate TIMESTAMP,
    ADD COLUMN priority VARCHAR,
    ADD COLUMN requester VARCHAR,
    ADD COLUMN assignedtech VARCHAR,
    ADD COLUMN category VARCHAR,
    ADD COLUMN timetoresolve INTERVAL, 
    ADD COLUMN assignedto VARCHAR,
    ADD COLUMN Observer VARCHAR;

    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    console.log(" table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterEndPointDev()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'endpointdevice'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE endpointdevice
    
    ADD COLUMN VoIPId INT REFERENCES voip(id),
    ADD COLUMN printerId INT REFERENCES printer(id),
    ADD COLUMN laptopId INT REFERENCES laptop(id),
    ADD COLUMN mobilephId INT REFERENCES mobilephone(id);

    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    console.log(" table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterMphone()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'mobilephone'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE mobilephone
    
    ADD COLUMN Assetname VARCHAR,
    ADD COLUMN SerialNumber VARCHAR,
    ADD COLUMN Processor VARCHAR,
    ADD COLUMN RAM VARCHAR,
    ADD COLUMN Storage VARCHAR,
    ADD COLUMN Screensize VARCHAR,
    ADD COLUMN Currentlocation VARCHAR,
    ADD COLUMN Dept VARCHAR,
    ADD COLUMN "Condition" VARCHAR,
    ADD COLUMN Status VARCHAR,
    ADD COLUMN Returndate DATE,
    ADD COLUMN purchasedate DATE,
    ADD COLUMN cost DECIMAL,
    ADD COLUMN warrantyinfo VARCHAR,
    ADD COLUMN IPAddress VARCHAR,
    ADD COLUMN macaddress VARCHAR,
    ADD COLUMN depmethod VARCHAR,
    ADD COLUMN decomissiondate DATE,
    ADD COLUMN serviceProv VARCHAR,
    ADD COLUMN DescriptionandSpecs VARCHAR,
    ADD COLUMN Assigneduser VARCHAR,
    ADD COLUMN AssetBarcode VARCHAR,
    ADD COLUMN OSVersion VARCHAR,
    ADD COLUMN Snapshotinfo VARCHAR,
    ADD COLUMN BackupFreq VARCHAR,
    ADD COLUMN "Method" VARCHAR,
    ADD COLUMN integrationwithtools VARCHAR,
    ADD COLUMN mentionif VARCHAR,
    ADD COLUMN AssignmentHistory VARCHAR;

    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    console.log(" table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterLaptop()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'laptop'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE laptop
    
    ADD COLUMN Assetname VARCHAR,
    ADD COLUMN SerialNumber VARCHAR,
    ADD COLUMN Manufacturer VARCHAR,
    ADD COLUMN ModelNo VARCHAR,
    ADD COLUMN AssetBarcode VARCHAR,
    ADD COLUMN Description VARCHAR,
    ADD COLUMN OS VARCHAR,
    ADD COLUMN Processor VARCHAR,
    ADD COLUMN RAM VARCHAR,
    ADD COLUMN Storage VARCHAR,
    ADD COLUMN Screensize VARCHAR,
    ADD COLUMN Currentlocation VARCHAR,
    ADD COLUMN Dept VARCHAR,
    ADD COLUMN AssignedUser VARCHAR,
    ADD COLUMN "Condition" VARCHAR,
    ADD COLUMN Status VARCHAR,
    ADD COLUMN AssignmentHistory VARCHAR,
    ADD COLUMN Returndate DATE,
    ADD COLUMN lastdeptacquired VARCHAR,
    ADD COLUMN purchasedate DATE,
    ADD COLUMN cost DECIMAL,
    ADD COLUMN warrantyinfo VARCHAR,
    ADD COLUMN IPAddress VARCHAR,
    ADD COLUMN macaddress VARCHAR,
    ADD COLUMN installedsSW VARCHAR,
    ADD COLUMN Licenses VARCHAR,
    ADD COLUMN depmethod VARCHAR,
    ADD COLUMN decomissiondate DATE,
    ADD COLUMN serviceProv VARCHAR,
    ADD COLUMN MaintainceHist VARCHAR,
    ADD COLUMN Firewallconfig VARCHAR,
    ADD COLUMN SecuritySW VARCHAR,
    ADD COLUMN Encryption VARCHAR;

    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    console.log(" table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterPrinter()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'printer'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE printer
    
    ADD COLUMN Assetname VARCHAR,
    ADD COLUMN SerialNumber VARCHAR,
    ADD COLUMN AssetBarcode VARCHAR,
    ADD COLUMN Currentlocation VARCHAR,
    ADD COLUMN Dept VARCHAR,
    ADD COLUMN "Condition" VARCHAR,
    ADD COLUMN Status VARCHAR,
    ADD COLUMN Returndate DATE,
    ADD COLUMN purchasedate DATE,
    ADD COLUMN cost DECIMAL,
    ADD COLUMN warrantyinfo VARCHAR,
    ADD COLUMN AssignmentHistory VARCHAR,
    ADD COLUMN Manufacturer VARCHAR,
    ADD COLUMN ModelNo VARCHAR,
    ADD COLUMN "Desc" VARCHAR,
    ADD COLUMN OS VARCHAR,
    ADD COLUMN Port VARCHAR,
    ADD COLUMN assigneduser VARCHAR,
    ADD COLUMN lastdeptacquired VARCHAR,
    ADD COLUMN installedsSW VARCHAR,
    ADD COLUMN Licenses VARCHAR,
    ADD COLUMN deployement_method VARCHAR,
    ADD COLUMN decomissiondate DATE,
    ADD COLUMN serviceProv VARCHAR,
    ADD COLUMN MaintainceHist VARCHAR;

    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    console.log(" table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////

async alterVOIP()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'voip'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    ALTER TABLE voip
    ADD COLUMN Assetname VARCHAR,
    ADD COLUMN SerialNumber VARCHAR,
    ADD COLUMN Assigneduser VARCHAR,
    ADD COLUMN AssetBarcode VARCHAR,
    ADD COLUMN DescriptionandSpecs VARCHAR,
    ADD COLUMN OSVersion VARCHAR,
    ADD COLUMN Processor VARCHAR,
    ADD COLUMN RAM VARCHAR,
    ADD COLUMN Storage VARCHAR,
    ADD COLUMN Screensize VARCHAR,
    ADD COLUMN Currentlocation VARCHAR,
    ADD COLUMN Dept VARCHAR,
    ADD COLUMN "Condition" VARCHAR,
    ADD COLUMN Status VARCHAR,
    ADD COLUMN Returndate DATE,
    ADD COLUMN purchasedate DATE,
    ADD COLUMN cost DECIMAL,
    ADD COLUMN warrantyinfo VARCHAR,
    ADD COLUMN IPAddress VARCHAR,
    ADD COLUMN macaddress VARCHAR,
    ADD COLUMN AssignmentHistory VARCHAR,
    ADD COLUMN depmethod VARCHAR,
    ADD COLUMN decomissiondate DATE,
    ADD COLUMN serviceProv VARCHAR,
    ADD COLUMN BackupFreq VARCHAR,
    ADD COLUMN "Method" VARCHAR,
    ADD COLUMN integrationwithtools VARCHAR,
    ADD COLUMN mentionif VARCHAR,
    ADD COLUMN Snapshotinfo VARCHAR;

    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    console.log(" table doesnt exist");
  }
}
catch (err){
  console.error(err);
}
}////////////////////////////////////////////////////////////////////////////////////////////////


async createUsers()
{
  try{ 
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
      id SERIAL PRIMARY KEY);
    `;
    /*const query = `
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      firstname VARCHAR(50) ,
      lastname VARCHAR(50) ,
      department VARCHAR(50),
      securityClearance BOOLEAN ,
      contactNo VARCHAR(20),
      email VARCHAR(100) UNIQUE ,
      team INTEGER,
      currentPassword VARCHAR(255) , 
      newPassword VARCHAR(255),
      MFAuth VARCHAR(255),
      userIdStatus VARCHAR(20) CHECK (userIdStatus IN ('active', 'inactive')),
      profilepic BYTEA,
      assetID INT REFERENCES asset(id),
      roleID INT REFERENCES role(id)
    );
    `;*/
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    
    console.log(' table created');
  }
}
catch (err){
  console.error(err);
}
}

async deleteUsers()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'users'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    const query = `
    DROP TABLE users;
    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    
    console.log(' table created');
  }
}
catch (err){
  console.error(err);
}
}


async alterUsers()
{
  try{ 
    const checkTableExistsQuery = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'users'
    );
  `;
  const tableExistsResult = await this.pool.query(checkTableExistsQuery);
  if (tableExistsResult.rows[0].exists) 
  try {
    
    const query = `
    ALTER TABLE users 
    ADD COLUMN firstname VARCHAR(50) ,
    ADD COLUMN   lastname VARCHAR(50) ,
    ADD COLUMN  department VARCHAR(50),
    ADD COLUMN  securityClearance BOOLEAN ,
    ADD COLUMN  contactNo VARCHAR(20),
    ADD COLUMN  email VARCHAR(100) UNIQUE ,
    ADD COLUMN   team INTEGER,
    ADD COLUMN   currentPassword VARCHAR(255) , 
    ADD COLUMN   newPassword VARCHAR(255),
    ADD COLUMN   MFAuth VARCHAR(255),
    ADD COLUMN   userIdStatus VARCHAR(20) CHECK (userIdStatus IN ('active', 'inactive')),
    ADD COLUMN   profilepic BYTEA,
    ADD COLUMN   assetID INT REFERENCES asset(id),
    ADD COLUMN   roleID INT REFERENCES role(id);
    `;
    await this.pool.query(query);
    console.log(' table altered');
  } catch (err) {
    console.error(err);
    console.error(' table creation failed');
  }
  else{
    
    console.log(' table created');
  }
}
catch (err){
  console.error(err);
}
}



}// end of class

module.exports = TablesRepository;