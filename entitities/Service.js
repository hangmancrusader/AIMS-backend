class Service {
  constructor({
    id,
    appID,
    dbID,
    userID,
    servicename,
    ServiceCustomer,
    ServiceCustodian,
    ServiceOwner,
    OwnerContInfo,
    Configurationfiles,
    CustomizationOptions,
    BriefDescription,
    detailedDesc,
    DeployDate,
    RolloutPlandetails,
    SecProtocols,
    SerCreationDate,
    SerDecommDate,
    ServiceCategory,
    ServiceClass,
    SLAdeets,
    SLAExpiryDate,
    VendorContact,
    SupportContDetails,
    AccessReq,
    AuthMethods,
    purchasedate,
    Cost,
    DependencyServ,
    DependentServ,
    Applications,
    Databases
  }) {
    this.id = id;
    this.appID = appID;
    this.dbID = dbID;
    this.userID = userID;
    this.servicename = servicename;
    this.ServiceCustomer = ServiceCustomer;
    this.ServiceCustodian = ServiceCustodian;
    this.ServiceOwner = ServiceOwner;
    this.OwnerContInfo = OwnerContInfo;
    this.Configurationfiles = Configurationfiles;
    this.CustomizationOptions = CustomizationOptions;
    this.BriefDescription = BriefDescription;
    this.detailedDesc = detailedDesc;
    this.DeployDate = DeployDate;
    this.RolloutPlandetails = RolloutPlandetails;
    this.SecProtocols = SecProtocols;
    this.SerCreationDate = SerCreationDate;
    this.SerDecommDate = SerDecommDate;
    this.ServiceCategory = ServiceCategory;
    this.ServiceClass = ServiceClass;
    this.SLAdeets = SLAdeets;
    this.SLAExpiryDate = SLAExpiryDate;
    this.VendorContact = VendorContact;
    this.SupportContDetails = SupportContDetails;
    this.AccessReq = AccessReq;
    this.AuthMethods = AuthMethods;
    this.purchasedate = purchasedate;
    this.Cost = Cost;
    this.DependencyServ = DependencyServ;
    this.DependentServ = DependentServ;
    this.Applications = Applications;
    this.Databases = Databases;
  }

  // Getters and setters can be added as needed
}

module.exports = Service;
