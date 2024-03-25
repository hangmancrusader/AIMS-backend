class VoIP {
    constructor({
      id,
      Assetname,
      SerialNumber,
      Assigneduser,
      AssetBarcode,
      DescriptionandSpecs,
      OSVersion,
      Processor,
      RAM,
      Storage,
      Screensize,
      Currentlocation,
      Dept,
      Condition,
      Status,
      Returndate,
      purchasedate,
      cost,
      warrantyinfo,
      IPAddress,
      macaddress,
      AssignmentHistory,
      depmethod,
      decomissiondate,
      serviceProv,
      BackupFreq,
      Method,
      integrationwithtools,
      mentionif,
      Snapshotinfo
    }) {
      this.id = id;
      this.Assetname = Assetname;
      this.SerialNumber = SerialNumber;
      this.Assigneduser = Assigneduser;
      this.AssetBarcode = AssetBarcode;
      this.DescriptionandSpecs = DescriptionandSpecs;
      this.OSVersion = OSVersion;
      this.Processor = Processor;
      this.RAM = RAM;
      this.Storage = Storage;
      this.Screensize = Screensize;
      this.Currentlocation = Currentlocation;
      this.Dept = Dept;
      this.Condition = Condition;
      this.Status = Status;
      this.Returndate = Returndate;
      this.purchasedate = purchasedate;
      this.cost = cost;
      this.warrantyinfo = warrantyinfo;
      this.IPAddress = IPAddress;
      this.macaddress = macaddress;
      this.AssignmentHistory = AssignmentHistory;
      this.depmethod = depmethod;
      this.decomissiondate = decomissiondate;
      this.serviceProv = serviceProv;
      this.BackupFreq = BackupFreq;
      this.Method = Method;
      this.integrationwithtools = integrationwithtools;
      this.mentionif = mentionif;
      this.Snapshotinfo = Snapshotinfo;
    }
  
    // Getters and setters can be added as needed
  }
  
  module.exports = VoIP;
  