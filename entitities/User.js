class User {
  constructor({
    id,
    assetID,
    roleID,
    serviceID,
    firstname,
    lastname,
    department,
    securityClearance,
    contactNo,
    email,
    team,
    currentPassword,
    newPassword,
    MFAuth,
    userIdStatus,
    profilepic
  }) {
    this.id = id;
    this.assetID = assetID;
    this.roleID = roleID;
    this.serviceID = serviceID;
    this.firstname = firstname;
    this.lastname = lastname;
    this.department = department;
    this.securityClearance = securityClearance;
    this.contactNo = contactNo;
    this.email = email;
    this.team = team;
    this.currentPassword = currentPassword;
    this.newPassword = newPassword;
    this.MFAuth = MFAuth;
    this.userIdStatus = userIdStatus;
    this.profilepic = profilepic;
  }

  // Getters and setters can be added as needed
}
module.exports = User;
