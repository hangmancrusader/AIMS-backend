class Printer {
    constructor({
      id,
      Assetname,
      SerialNumber,
      AssetBarcode,
      Currentlocation,
      Dept,
      Condition,
      Status,
      Returndate,
      purchasedate,
      cost,
      warrantyinfo,
      AssignmentHistory,
      Manufacturer,
      ModelNo,
      Desc,
      OS,
      Port,
      assigneduser,
      lastdeptacquired,
      installedsSW,
      Licenses,
      deployement_method,
      decomissiondate,
      serviceProv,
      MaintainceHist
    }) {
      this.id = id;
      this.Assetname = Assetname;
      this.SerialNumber = SerialNumber;
      this.AssetBarcode = AssetBarcode;
      this.Currentlocation = Currentlocation;
      this.Dept = Dept;
      this.Condition = Condition;
      this.Status = Status;
      this.Returndate = Returndate;
      this.purchasedate = purchasedate;
      this.cost = cost;
      this.warrantyinfo = warrantyinfo;
      this.AssignmentHistory = AssignmentHistory;
      this.Manufacturer = Manufacturer;
      this.ModelNo = ModelNo;
      this.Desc = Desc;
      this.OS = OS;
      this.Port = Port;
      this.assigneduser = assigneduser;
      this.lastdeptacquired = lastdeptacquired;
      this.installedsSW = installedsSW;
      this.Licenses = Licenses;
      this.deployement_method = deployement_method;
      this.decomissiondate = decomissiondate;
      this.serviceProv = serviceProv;
      this.MaintainceHist = MaintainceHist;
    }
  
    // Getters and setters can be added as needed
  }
  
  module.exports = Printer;
  