class NetworkDevice {
    constructor({
      id,
      DevName,
      type,
      ModelNo,
      PhysicalLoc,
      RackandUnit,
      FirewallRules,
      DetectionSettings,
      LoginUN,
      LoginPassword,
      SSHconfig,
      VPNtunnels,
      VPNsetting,
      RoutingTables,
      DynamicRoutingProtocols,
      OSVersion,
      Lastupdate,
      HighAvailConfig,
      FailOverSettings,
      InterfacesConfig,
      MACaddress,
      PortConfig,
      logging_config,
      SNMPConfig,
      PowerConsumption,
      TempEnvControls,
      Configfiles,
      RunningConfigs,
      purchasedate,
      Cost,
      VendorContact,
      SupportContDetails,
      Doclink
    }) {
      this.id = id;
      this.DevName = DevName;
      this.type = type;
      this.ModelNo = ModelNo;
      this.PhysicalLoc = PhysicalLoc;
      this.RackandUnit = RackandUnit;
      this.FirewallRules = FirewallRules;
      this.DetectionSettings = DetectionSettings;
      this.LoginUN = LoginUN;
      this.LoginPassword = LoginPassword;
      this.SSHconfig = SSHconfig;
      this.VPNtunnels = VPNtunnels;
      this.VPNsetting = VPNsetting;
      this.RoutingTables = RoutingTables;
      this.DynamicRoutingProtocols = DynamicRoutingProtocols;
      this.OSVersion = OSVersion;
      this.Lastupdate = Lastupdate;
      this.HighAvailConfig = HighAvailConfig;
      this.FailOverSettings = FailOverSettings;
      this.InterfacesConfig = InterfacesConfig;
      this.MACaddress = MACaddress;
      this.PortConfig = PortConfig;
      this.logging_config = logging_config;
      this.SNMPConfig = SNMPConfig;
      this.PowerConsumption = PowerConsumption;
      this.TempEnvControls = TempEnvControls;
      this.Configfiles = Configfiles;
      this.RunningConfigs = RunningConfigs;
      this.purchasedate = purchasedate;
      this.Cost = Cost;
      this.VendorContact = VendorContact;
      this.SupportContDetails = SupportContDetails;
      this.Doclink = Doclink;
    }
  
    // Getters and setters can be added as needed
  }
  
  module.exports = NetworkDevice;
  