class Application {
    constructor({
      id,
      serviceID,
      vmID,
      dbID,
      ServerName,
      Servertype,
      ServerIPAdd,
      Virtual_Machine,
      DatabaseServer,
      BackupFreq,
      BackupMethods,
      RecoveryProcedures,
      ApplicationName,
      ApplicationVers,
      ApplicationURL,
      deploymentMethod,
      UserRoles,
      UserPermissions,
      SSLconfig,
      WebServerType,
      WebServerVers,
      VirtualHostConfig,
      VendorContact,
      SupportContDetails,
      DBconnectdetails,
      DBnames,
      CurrentVers,
      LastUpdate,
      Monitortools,
      ifyesExplain,
      purchasedate,
      cost
    }) {
      this.id = id;
      this.serviceID = serviceID;
      this.vmID = vmID;
      this.dbID = dbID;
      this.ServerName = ServerName;
      this.Servertype = Servertype;
      this.ServerIPAdd = ServerIPAdd;
      this.Virtual_Machine = Virtual_Machine;
      this.DatabaseServer = DatabaseServer;
      this.BackupFreq = BackupFreq;
      this.BackupMethods = BackupMethods;
      this.RecoveryProcedures = RecoveryProcedures;
      this.ApplicationName = ApplicationName;
      this.ApplicationVers = ApplicationVers;
      this.ApplicationURL = ApplicationURL;
      this.deploymentMethod = deploymentMethod;
      this.UserRoles = UserRoles;
      this.UserPermissions = UserPermissions;
      this.SSLconfig = SSLconfig;
      this.WebServerType = WebServerType;
      this.WebServerVers = WebServerVers;
      this.VirtualHostConfig = VirtualHostConfig;
      this.VendorContact = VendorContact;
      this.SupportContDetails = SupportContDetails;
      this.DBconnectdetails = DBconnectdetails;
      this.DBnames = DBnames;
      this.CurrentVers = CurrentVers;
      this.LastUpdate = LastUpdate;
      this.Monitortools = Monitortools;
      this.ifyesExplain = ifyesExplain;
      this.purchasedate = purchasedate;
      this.cost = cost;
    }
  
    // Getters and setters can be added as needed
  }
  
  module.exports = Application;
  