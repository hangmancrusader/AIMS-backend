class Database {
  constructor({
    id,
    vmID,
    DBServername,
    type,
    ServerIPAdd,
    Virtual_Machine,
    DBMStype,
    DBMSversion,
    instance,
    CertifExpiry,
    DBNames,
    DBowners,
    CollationSett,
    BackupFreq,
    TimeforBACKUP,
    RecoveryModel,
    BackupStorageLocation,
    ClusteringConfig,
    ReplicateConfig,
    VendorContact,
    SupportContDetails,
    versionandUpdates,
    purchasedate,
    cost
  }) {
    this.id = id;
    this.vmID = vmID;
    this.DBServername = DBServername;
    this.type = type;
    this.ServerIPAdd = ServerIPAdd;
    this.Virtual_Machine = Virtual_Machine;
    this.DBMStype = DBMStype;
    this.DBMSversion = DBMSversion;
    this.instance = instance;
    this.CertifExpiry = CertifExpiry;
    this.DBNames = DBNames;
    this.DBowners = DBowners;
    this.CollationSett = CollationSett;
    this.BackupFreq = BackupFreq;
    this.TimeforBACKUP = TimeforBACKUP;
    this.RecoveryModel = RecoveryModel;
    this.BackupStorageLocation = BackupStorageLocation;
    this.ClusteringConfig = ClusteringConfig;
    this.ReplicateConfig = ReplicateConfig;
    this.VendorContact = VendorContact;
    this.SupportContDetails = SupportContDetails;
    this.versionandUpdates = versionandUpdates;
    this.purchasedate = purchasedate;
    this.cost = cost;
  }
}

//
module.exports = Database;
