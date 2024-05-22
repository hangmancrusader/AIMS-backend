class Hosting {
  constructor({
    id,
    //vmID,
    hostname,
    CloudProv,
    CloudPlan,
    SLAdeets,
    CPAccessURL,
    CPLoginUserName,
    CPLoginUserPassword,
    SSHhn,
    BillingCycle,
    NextRenewaldate,
    BilingContact,
    BackupFreq,
    TimeforBACKUP,
    Timingsfrom,
    TimingsTo,
    SSLcertif,
    CertifExpiry,
    TechSupportContact,
    EmergencyContact,
    SubscriptionStartDate,
    SubscriptionEnddate,
    MonthlyCost,
    AccountID,
    Hypervisortype,
    VersionHV,
    HostHV
  }) {
    this.id = id;
    //this.vmID = vmID;
    this.hostname = hostname;
    this.CloudProv = CloudProv;
    this.CloudPlan = CloudPlan;
    this.SLAdeets = SLAdeets;
    this.CPAccessURL = CPAccessURL;
    this.CPLoginUserName = CPLoginUserName;
    this.CPLoginUserPassword = CPLoginUserPassword;
    this.SSHhn = SSHhn;
    this.BillingCycle = BillingCycle;
    this.NextRenewaldate = NextRenewaldate;
    this.BilingContact = BilingContact;
    this.BackupFreq = BackupFreq;
    this.TimeforBACKUP = TimeforBACKUP;
    this.Timingsfrom = Timingsfrom;
    this.TimingsTo = TimingsTo;
    this.SSLcertif = SSLcertif;
    this.CertifExpiry = CertifExpiry;
    this.TechSupportContact = TechSupportContact;
    this.EmergencyContact = EmergencyContact;
    this.SubscriptionStartDate = SubscriptionStartDate;
    this.SubscriptionEnddate = SubscriptionEnddate;
    this.MonthlyCost = MonthlyCost;
    this.AccountID = AccountID;
    this.Hypervisortype = Hypervisortype;
    this.VersionHV = VersionHV;
    this.HostHV = HostHV;
  }

  d;
}

module.exports = Hosting;
