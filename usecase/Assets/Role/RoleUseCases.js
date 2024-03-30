// UseCases for User Administration done by a Root/Other Role
const RoleRepository = require("../../../infrastructure/repository/RoleRepository.js");
const Role = require("../../../entitities/Role.js")
class RoleUseCases {

  constructor()
  {
    this.roleRepository = new RoleRepository();
  }

  async addRole(roleData) {
    const newRole = new Role(roleData);
    await this.roleRepository.addRole(newRole);
    return newRole;
  }

 async getAllRoles() {
  return this.roleRepository.getAllRoles()
 }

 async getRole(roleId)
 {
  return this.roleRepository.getRole(roleId)
 }

 async updateRole(roleId, roleData)
 {
  return this.roleRepository.updateRole(roleId, roleData)
 }

 async deleteRole(roleId){
  return this.roleRepository.deleteRole(roleId)
 }
}

module.exports = RoleUseCases;





  