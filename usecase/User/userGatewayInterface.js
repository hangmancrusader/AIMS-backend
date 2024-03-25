class UserGatewayInterface {
    async createUser(user) {
      // Method to create a new user
      throw new Error('Method not implemented');
    }
  
    async getUserByEmail(email) {
      // Method to retrieve user by email
      throw new Error('Method not implemented');
    }
  
    async getUserById(userId) {
      // Method to retrieve user by ID
      throw new Error('Method not implemented');
    }
  
    async updateUser(user) {
      // Method to update user
      throw new Error('Method not implemented');
    }
  
    // Additional methods for other user-related operations can be added as needed
  }
  module.exports = UserGatewayInterface;