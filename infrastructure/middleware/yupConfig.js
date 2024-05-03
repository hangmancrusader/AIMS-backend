
const yup = require('yup');

const newLaptopSchema = yup.object().shape({
  Assetname: yup.string().required('Asset Name is required'),
  SerialNumber: yup.string().required('Serial Number is required'),
  Manufacturer: yup.string().required('Manufacturer is required'),
  ModelNo: yup.string().required('Model Number is required'),
  AssetBarcode: yup.string().required('Asset Barcode is required'),
  Description: yup.string().required('Description is required'),
  OS: yup.string().required('Operating System is required'),
  Processor: yup.string().required('Processor is required'),
  RAM: yup.string().required('RAM is required'),
  Storage: yup.string().required('Storage is required'),
  Screensize: yup.string().required('Screen Size is required'),
  Currentlocation: yup.string().required('Current Location is required'),
  Dept: yup.string().required('Department is required'),
  AssignedUser: yup.string().required('Assigned User is required'),
  Condition: yup.string().required('Condition is required'),
  Status: yup.string().required('Status is required'),
  AssignmentHistory: yup.string().required('Assignment History is required'),
  Returndate: yup.string().required('Return Date is required'),
  lastdeptacquired: yup.string().required('Last Department Acquired is required'),
  purchasedate: yup.string().required('Purchase Date is required'),
  cost: yup.string().required('Cost is required'),
  warrantyinfo: yup.string().required('Warranty Information is required'),
  IPAddress: yup.string().required('IP Address is required'),
  macaddress: yup.string().required('Mac Address is required'),
  installedsSW: yup.string().required('Installed Software is required'),
  Licenses: yup.string().required('Licenses is required'),
  depmethod: yup.string().required('Deployment Method is required'),
  decomissiondate: yup.string().required('Decommission Date is required'),
  serviceProv: yup.string().required('Service Provider is required'),
  MaintainceHist: yup.string().required('Maintenance History is required'),
  Firewallconfig: yup.string().required('Firewall Configuration is required'),
  SecuritySW: yup.string().required('Security Software is required'),
  Encryption: yup.string().required('Encryption is required'),
});

 const newMobilePhoneSchema = yup.object().shape({
  Assetname: yup.string().required('Asset Name is required'),
  SerialNumber: yup.string().required('Serial Number is required'),
  Processor: yup.string().required('Processor is required'),
  RAM: yup.string().required('RAM is required'),
  Storage: yup.string().required('Storage is required'),
  Screensize: yup.string().required('Screen Size is required'),
  Currentlocation: yup.string().required('Current Location is required'),
  Dept: yup.string().required('Department is required'),
  Condition: yup.string().required('Condition is required'),
  Status: yup.string().required('Status is required'),
  Returndate: yup.date().required('Return Date is required'), // Make return date required
  purchasedate: yup.date().required('Purchase Date is required'),
  cost: yup.number().positive('Cost must be positive').required('Cost is required'), // Enforce positive number
  warrantyinfo: yup.string().required('Warranty Information is required'), // Make warranty info required
  IPAddress: yup.string().required('IP Address is required'), // Make IP address required and validate
  macaddress: yup.string().required('Mac Address is required'), // Make mac address required
  depmethod: yup.string().required('Deployment Method is required'),
  decomissiondate: yup.date().required('Decommission Date is required'), // Make decommission date required
  serviceProv: yup.string().required('Service Provider is required'),
  DescriptionandSpecs: yup.string().required('Description and Specs are required'),
  Assigneduser: yup.string().required('Assigned User is required'), // Make assigned user required
  AssetBarcode: yup.string().required('Asset Barcode is required'),
  OSVersion: yup.string().required('OS Version is required'),
  Snapshotinfo: yup.string().required('Snapshot Information is required'), // Make snapshot info required
  BackupFreq: yup.string().required('Backup Frequency is required'),
  Method: yup.string().required('Method is required'),
  integrationwithtools: yup.string().required('Integration with Tools is required'),
  mentionif: yup.string().required('Mention If is required'), // Make mentionif required
  AssignmentHistory: yup.string().required('Assignment History is required'), // Make assignment history required
});

const newPrinterSchema = yup.object().shape({
  Assetname: yup.string().required('Asset Name is required'),
  SerialNumber: yup.string().required('Serial Number is required'),
  AssetBarcode: yup.string().required('Asset Barcode is required'),
  Currentlocation: yup.string().required('Current Location is required'),
  Dept: yup.string().required('Department is required'),
  Condition: yup.string().required('Condition is required'),
  Status: yup.string().required('Status is required'),
  Returndate: yup.string().required('Return Date is required'),
  purchasedate: yup.string().required('Purchase Date is required'),
  cost: yup.string().required('Cost is required'),
  warrantyinfo: yup.string().required('Warranty Information is required'),
  AssignmentHistory: yup.string().required('Assignment History is required'),
  Manufacturer: yup.string().required('Manufacturer is required'),
  ModelNo: yup.string().required('Model Number is required'),
  Desc: yup.string().required('Description is required'), // Assuming Desc refers to Description
  OS: yup.string().required('Operating System is required'),
  Port: yup.string().required('Port is required'),
  assigneduser: yup.string().required('Assigned User is required'), // Assuming assigneduser refers to assignedUser
  lastdeptacquired: yup.string().required('Last Department Acquired is required'),
  installedsSW: yup.string().required('Installed Software is required'),
  Licenses: yup.string().required('Licenses is required'),
  deployement_method: yup.string().required('Deployment Method is required'), // Assuming deployement_method refers to deployment method
  decomissiondate: yup.string().required('Decommission Date is required'),
  serviceProv: yup.string().required('Service Provider is required'),
  MaintainceHist: yup.string().required('Maintenance History is required'),
});


 const newVOIPSchema = yup.object().shape({
  Assetname: yup.string().required(),
  SerialNumber: yup.string().required(),
  Assigneduser: yup.string().required(),
  AssetBarcode: yup.string().required(),
  DescriptionandSpecs: yup.string().required(),
  OSVersion: yup.string().required(),
  Processor: yup.string().required(),
  RAM: yup.string().required(),
  Storage: yup.string().required(),
  Screensize: yup.string().required(),
  Currentlocation: yup.string().required(),
  Dept: yup.string().required(),
  Condition: yup.string().required(),
  Status: yup.string().required(),
  Returndate: yup.string().required(),
  purchasedate: yup.string().required(),
  cost: yup.string().required(),
  warrantyinfo: yup.string().required(),
  IPAddress: yup.string().required(),
  macaddress: yup.string().required(),
  AssignmentHistory: yup.string().required(),
  depmethod: yup.string().required(),
  decomissiondate: yup.string().required(),
  serviceProv: yup.string().required(),
  BackupFreq: yup.string().required(),
  Method: yup.string().required(),
  integrationwithtools: yup.string().required(),
  mentionif: yup.string().required(),
  Snapshotinfo: yup.string().required(),
});

const newHostingSchema = yup.object().shape({
  vmID: yup.string(),
  hostname: yup.string().required('Hostname is required'),
  CloudProv: yup.string().required('Cloud Provider is required'),
  CloudPlan: yup.string().required('Cloud Plan is required'),
  SLAdeets: yup.string().required('SLA Details are required'), // Make SLA details required
  CPAccessURL: yup.string().url('Invalid CP Access URL'),
  CPLoginUserName: yup.string().required('Login Username is required'),
  CPLoginUserPassword: yup.string().required('Login Password is required'),
  SSHhn: yup.string().required('SSH Hostname is required'),
  BillingCycle: yup.string().required('Billing Cycle is required'),
  NextRenewaldate: yup.string(), // Allow empty string for Next Renewal Date
  BilingContact: yup.string().required('Billing Contact is required'), // Make billing contact required
  BackupFreq: yup.string().required('Backup Frequency is required'), // Change to string
  TimeforBACKUP: yup.string().required('Time for Backup is required'), // Make time for backup required
  Timingsfrom: yup.string().required('Timings From is required'), // Make timings from required
  TimingsTo: yup.string().required('Timings To is required'), // Make timings to required
  SSLcertif: yup.string(), // No validation for certificate
  CertifExpiry: yup.string(), // Allow empty string for certificate expiry
  TechSupportContact: yup.string().required('Tech Support Contact is required'), // Make tech support contact required
  EmergencyContact: yup.string().required('Emergency Contact is required'), // Make emergency contact required
  SubscriptionStartDate: yup.string().required('Subscription Start Date is required'),
  SubscriptionEnddate: yup.string(), // Allow empty string for end date
  MonthlyCost: yup.string().required('Monthly Cost is required'), // Change to string
  AccountID: yup.string().required('Account ID is required'),
  Hypervisortype: yup.string().required('Hypervisor Type is required'),
  VersionHV: yup.string().required('Hypervisor Version is required'),
  HostHV: yup.string().required('Hypervisor Host is required')
});

const newNetworkDeviceSchema = yup.object().shape({
  DevName: yup.string().required(),
  type: yup.string().required(),
  ModelNo: yup.string().required(),
  PhysicalLoc: yup.string().required(),
  RackandUnit: yup.string().required(),
  FirewallRules: yup.string().required(),
  DetectionSettings: yup.string().required(),
  LoginUN: yup.string().required(),
  LoginPassword: yup.string().required(),
  SSHconfig: yup.string().required(),
  VPNtunnels: yup.string().required(),
  VPNsetting: yup.string().required(),
  RoutingTables: yup.string().required(),
  DynamicRoutingProtocols: yup.string().required(),
  OSVersion: yup.string().required(),
  Lastupdate: yup.string().required(),
  HighAvailConfig: yup.string().required(),
  FailOverSettings: yup.string().required(),
  InterfacesConfig: yup.string().required(),
  MACaddress: yup.string().required(),
  PortConfig: yup.string().required(),
  logging_config: yup.string().required(),
  SNMPConfig: yup.string().required(),
  PowerConsumption: yup.string().required(),
  TempEnvControls: yup.string().required(),
  Configfiles: yup.string().required(),
  RunningConfigs: yup.string().required(),
  purchasedate: yup.string().required(),
  Cost: yup.string().required(),
  VendorContact: yup.string().required(),
  SupportContDetails: yup.string().required(),
  Doclink: yup.string().required(),
});

 const newSecuritySolutionSchema = yup.object().shape({
  product_name: yup.string().required(),
  vendor: yup.string().required(),
  subscriptionID: yup.string().required(),
  license_expiry_date: yup.string().required(),
  current_version: yup.string().required(),
  last_updated: yup.string().required(),
  deployement_method: yup.string().required(),
  policy_settings: yup.string().required(),
  exclusion_list: yup.string().required(),
  logging_config: yup.string().required(),
  even_log_storage_location: yup.string().required(),
  scan_frequency: yup.string().required(),
  scan_time: yup.string().required(),
  scan_custom_config: yup.string().required(),
  integration_SEM: yup.string().required(),
  integration_EP_management: yup.string().required(),
  threat_feeds: yup.string().required(),
  ioc_management: yup.string().required(),
  vendor_contact: yup.string().required(),
  documentation_links: yup.string().required(),
  purchase_date: yup.string().required(),
  cost: yup.string().required(),
});


 const newVMSchema = yup.object().shape({

  //netdevID: yup.string().required(),
  //secsolID: yup.string().required(),
  //appID: yup.string().required(),
  //dbID: yup.string().required(),
  VMname: yup.string().required(),
  Hostname: yup.string().required(),
  CPUconfig: yup.string().required(),
  AssetBarcode: yup.string().required(),
  StorageConfigSpecs: yup.string().required(),
  type: yup.string().required(),
  version: yup.string().required(),
  host: yup.string().required(),
  OStype: yup.string().required(),
  License: yup.string().required(),
  Firewallconfig: yup.string().required(),
  SecSW: yup.string().required(),
  SecSoln: yup.string().required(),
  Encryption: yup.string().required(),
  IPAddress: yup.string().required(),
  macaddress: yup.string().required(),
  DNS: yup.string().required(),
  Subnet: yup.string().required(),
  Gateway: yup.string().required(),
  deploymentMethod: yup.string().required(),
  decomissionDate: yup.string().required(),
  serviceProv: yup.string().required(),
  SSinfo: yup.string().required(),
  BackupFreq: yup.string().required(),
  Method: yup.string().required(),
  integrationwithtools: yup.string().required(),
  mentionif: yup.string().required(),
  Currentlocation: yup.string().required(),
  Dept: yup.string().required(),
  Status: yup.string().required(),
  Condition: yup.string().required(),
  purchasedate: yup.string().required(),
  cost: yup.string().required(),
});

 const newDBSchema = yup.object().shape({
    DBServername: yup.string().required('Database Server Name is required'),
    type: yup.string().required('Type is required'),
    ServerIPAdd: yup.string().required('Server IP Address is required'), // Validate as IPv4 address
    Virtual_Machine: yup.string(), // Allow empty string for Virtual Machine
    DBMStype: yup.string().required('DBMS Type is required'),
    DBMSversion: yup.string().required('DBMS Version is required'),
    instance: yup.string(), // Allow empty string for instance
    CertifExpiry: yup.string(), // Allow empty string for certificate expiry
    DBNames: yup.array().of(yup.string()).min(1, 'At least one Database Name is required'),  // Require at least one database name
    DBowners: yup.array().of(yup.string()), // Allow array of database owners as strings
    CollationSett: yup.string(), // Allow empty string for collation setting
    BackupFreq: yup.string().required('Backup Frequency is required'),
    TimeforBACKUP: yup.string().required('Time for Backup is required'),
    RecoveryModel: yup.string().required('Recovery Model is required'),
    BackupStorageLocation: yup.string().required('Backup Storage Location is required'),
    ClusteringConfig: yup.string(), // Allow empty string for clustering configuration
    ReplicateConfig: yup.string(), // Allow empty string for replication configuration
    VendorContact: yup.string(), // Allow empty string for vendor contact
    SupportContDetails: yup.string(), // Allow empty string for support contact details
    versionandUpdates: yup.string(), // Allow empty string for version and updates
    purchasedate: yup.string(), // Allow empty string for purchase date
    cost: yup.string(), // Allow empty string for cost
});

 const newApplicationSchema = yup.object().shape({
  serviceID: yup.number().required(),
  vmID: yup.number().required(),
  dbID: yup.number().required(),
  ServerName: yup.string().required(),
  Servertype: yup.string().required(),
  ServerIPAdd: yup.string().required(),
  Virtual_Machine: yup.string().required(),
  DatabaseServer: yup.string().required(),
  BackupFreq: yup.string().required(),
  BackupMethods: yup.string().required(),
  RecoveryProcedures: yup.string().required(),
  ApplicationName: yup.string().required(),
  ApplicationVers: yup.string().required(),
  ApplicationURL: yup.string().required(),
  deploymentMethod: yup.string().required(),
  UserRoles: yup.string().required(),
  UserPermissions: yup.string().required(),
  SSLconfig: yup.string().required(),
  WebServerType: yup.string().required(),
  WebServerVers: yup.string().required(),
  VirtualHostConfig: yup.string().required(),
  VendorContact: yup.string().required(),
  SupportContDetails: yup.string().required(),
  DBconnectdetails: yup.string().required(),
  DBnames: yup.string().required(),
  CurrentVers: yup.string().required(),
  LastUpdate: yup.string().required(),
  Monitortools: yup.string().required(),
  ifyesExplain: yup.string().required(),
  purchasedate: yup.string().required(),
  cost: yup.string().required(),
});

 const newServiceSchema = yup.object().shape({
  servicename: yup.string().required(),
  ServiceCustomer: yup.string().required(),
  ServiceCustodian: yup.string().required(),
  ServiceOwner: yup.string().required(),
  OwnerContInfo: yup.string().required(),
  Configurationfiles: yup.string().required(),
  CustomizationOptions: yup.string().required(),
  BriefDescription: yup.string().required(),
  detailedDesc: yup.string().required(),
  DeployDate: yup.string().required(),
  RolloutPlandetails: yup.string().required(),
  SecProtocols: yup.string().required(),
  SerCreationDate: yup.string().required(),
  SerDecommDate: yup.string().required(),
  ServiceCategory: yup.string().required(),
  ServiceClass: yup.string().required(),
  SLAdeets: yup.string().required(),
  SLAExpiryDate: yup.string().required(),
  VendorContact: yup.string().required(),
  SupportContDetails: yup.string().required(),
  AccessReq: yup.string().required(),
  AuthMethods: yup.string().required(),
  purchasedate: yup.string().required(),
  Cost: yup.string().required(),
  DependencyServ: yup.string().required(),
  DependentServ: yup.string().required(),
  Applications: yup.string().required(),
  Databases: yup.string().required(),
});

 const generateSchema = (fields) => {
    let schemaShape = {};
  
    fields.forEach((field) => {
      switch (field.type) {
        case 'text':
          schemaShape[field.name] = yup.string().required(`${field.label} is required`);
          break;
        case 'textarea':
          schemaShape[field.name] = yup.string().required(`${field.label} is required`);
          break;
        case 'dropdown':
          schemaShape[field.name] = yup.string().required(`${field.label} is required`);
          break;
        case 'dropdown-multi':
          schemaShape[field.name] = yup.array().min(1).required(`${field.label} is required`);
          break;
        case 'date':
          schemaShape[field.name] = yup.string().required(`${field.label} is required`);
          break;
          
        // Add more cases for other field types as needed
        default:
          // Default to string type if type is not recognized
          schemaShape[field.name] = yup.string().required(`${field.label} is required`);
          break;
      }
    });

    return yup.object().shape(schemaShape);
};

module.exports = {
    generateSchema,
    newServiceSchema,
    newDBSchema,
    newApplicationSchema,
    newLaptopSchema,
    newHostingSchema,
    newNetworkDeviceSchema,
    newVMSchema,
    newLaptopSchema,
    newSecuritySolutionSchema,
    newVOIPSchema,
    newPrinterSchema,
    newMobilePhoneSchema

}