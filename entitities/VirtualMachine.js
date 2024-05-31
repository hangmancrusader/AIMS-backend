class VirtualMachine {
  constructor({
    id,
    hostingID,
    netdevID,
    secsolID,
    VMname,
    Hostname,
    CPUconfig,
    AssetBarcode,
    StorageConfigSpecs,
    type,
    version,
    host,
    OStype,
    License,
    Firewallconfig,
    SecSW,
    SecSoln,
    Encryption,
    IPAddress,
    macaddress,
    DNS,
    Subnet,
    Gateway,
    deploymentMethod,
    decomissionDate,
    serviceProv,
    SSinfo,
    BackupFreq,
    Method,
    integrationwithtools,
    mentionif,
    Currentlocation,
    Dept,
    Status,
    Condition,
    purchasedate,
    cost,
    NetworkDeviceName,
    NetworkDeviceType,
    NetworkDeviceModelNumber
  }) {
    this.id = id;
    this.hostingID = hostingID;
    this.netdevID = netdevID;
    this.secsolID = secsolID;
    this.VMname = VMname;
    this.Hostname = Hostname;
    this.CPUconfig = CPUconfig;
    this.AssetBarcode = AssetBarcode;
    this.StorageConfigSpecs = StorageConfigSpecs;
    this.type = type;
    this.version = version;
    this.host = host;
    this.OStype = OStype;
    this.License = License;
    this.Firewallconfig = Firewallconfig;
    this.SecSW = SecSW;
    this.SecSoln = SecSoln;
    this.Encryption = Encryption;
    this.IPAddress = IPAddress;
    this.macaddress = macaddress;
    this.DNS = DNS;
    this.Subnet = Subnet;
    this.Gateway = Gateway;
    this.deploymentMethod = deploymentMethod;
    this.decomissionDate = decomissionDate;
    this.serviceProv = serviceProv;
    this.SSinfo = SSinfo;
    this.BackupFreq = BackupFreq;
    this.Method = Method;
    this.integrationwithtools = integrationwithtools;
    this.mentionif = mentionif;
    this.Currentlocation = Currentlocation;
    this.Dept = Dept;
    this.Status = Status;
    this.Condition = Condition;
    this.purchasedate = purchasedate;
    this.cost = cost;
    this.NetworkDeviceName = NetworkDeviceName;
    this.NetworkDeviceType = NetworkDeviceType;
    this.NetworkDeviceModelNumber = NetworkDeviceModelNumber;
  }

}

module.exports = VirtualMachine;
