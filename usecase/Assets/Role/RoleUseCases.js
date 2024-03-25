// UseCases for User Administration done by a Root/Other Role
const RoleRepository = require('../../infrastructure/repository/RoleRepository.js');
const Role = require('../../entitities/Role.js')
class RoleUseCases {

  constructor()
  {
    this.roleRepository = new RoleRepository();
  }

  async addRole(roleData) {
    // Log the userData object
    console.log(roleData);
    // Logic to add a new user
    const newRole = new Role(roleData);
    await this.roleRepository.addRole(newRole);
    return newRole;
  }

  //how to implement this with user ID-get user ID and query DB against that to retreive roleID and return it?
  async getRole(userId) {
    console.log(userId);
    return await this.userRepository.getUser(userId);
  }


  async getAllRoles() {
    return await this.roleRepository.getAllRoles();
  }

  //how to implement this with user ID-?
  async deleteRole(roleId) {
    await this.roleRepository.deleteRole(roleId);
  }
//update the Role Table not the role for a particular user
  async updateRole(roleId, roleData) {
    // Logic to update a user
    await this.roleRepository.updateRole(roleId, roleData);
  }

}

module.exports = RoleUseCases;





  