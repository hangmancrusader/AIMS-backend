class User {
  constructor({
    id,
    assetID,
    roleID,
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
    userIdStatus
  }) {
    this.id = id;
    this.assetID = assetID;
    this.roleID = roleID;
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
  }

  // Getters and setters can be added as needed
}
module.exports = User;


