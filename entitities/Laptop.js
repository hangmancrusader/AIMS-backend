class Laptop {
    constructor({
      id,
      Assetname,
      SerialNumber,
      Manufacturer,
      ModelNo,
      AssetBarcode,
      Description,
      OS,
      Processor,
      RAM,
      Storage,
      Screensize,
      Currentlocation,
      Dept,
      AssignedUser,
      Condition,
      Status,
      AssignmentHistory,
      Returndate,
      lastdeptacquired,
      purchasedate,
      cost,
      warrantyinfo,
      IPAddress,
      macaddress,
      installedsSW,
      Licenses,
      depmethod,
      decomissiondate,
      serviceProv,
      MaintainceHist,
      Firewallconfig,
      SecuritySW,
      Encryption
    }) {
      this.id = id;
      this.Assetname = Assetname;
      this.SerialNumber = SerialNumber;
      this.Manufacturer = Manufacturer;
      this.ModelNo = ModelNo;
      this.AssetBarcode = AssetBarcode;
      this.Description = Description;
      this.OS = OS;
      this.Processor = Processor;
      this.RAM = RAM;
      this.Storage = Storage;
      this.Screensize = Screensize;
      this.Currentlocation = Currentlocation;
      this.Dept = Dept;
      this.AssignedUser = AssignedUser;
      this.Condition = Condition;
      this.Status = Status;
      this.AssignmentHistory = AssignmentHistory;
      this.Returndate = Returndate;
      this.lastdeptacquired = lastdeptacquired;
      this.purchasedate = purchasedate;
      this.cost = cost;
      this.warrantyinfo = warrantyinfo;
      this.IPAddress = IPAddress;
      this.macaddress = macaddress;
      this.installedsSW = installedsSW;
      this.Licenses = Licenses;
      this.depmethod = depmethod;
      this.decomissiondate = decomissiondate;
      this.serviceProv = serviceProv;
      this.MaintainceHist = MaintainceHist;
      this.Firewallconfig = Firewallconfig;
      this.SecuritySW = SecuritySW;
      this.Encryption = Encryption;
    }
  
    // Getters and setters can be added as needed
  }
  
  module.exports = Laptop;
  