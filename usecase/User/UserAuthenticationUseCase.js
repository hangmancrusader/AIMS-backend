const UserRepository = require("../../infrastructure/repository/UserRepository.js");
const User = require("../../entitities/User.js");
const jwttoken = require("jsonwebtoken");
const authtoken = require("../../infrastructure/middleware/authTokenService.js");
const bcrypt = require("bcrypt");
class UserAuthentication {
  constructor() {
    this.userRepository = new UserRepository();
    this.authtoken = new authtoken();
  }

  async verifyuserlogin(email, password) {
    // Logic to authenticate a user using bcrypt
    try {
      const userinput = password;
      const { id, currentpassword, roleid } =
        await this.userRepository.getUserHashforAuth(email);// reurns userid, password, and roleid
      console.log(id);
      console.log(roleid);
      const { typeofrole } = await this.userRepository.assignedRole(roleid);// returns type of role attached to user's roleid
      console.log(typeofrole); //return this to user controller to validate apis
      const hashedpassword = currentpassword;

      const match = await bcrypt.compare(userinput, hashedpassword);

      if (!match) {
        throw new Error("Invalid email or password");
      } else {
        const token = this.authtoken.createToken({ id }, email);
        return { id, token, typeofrole };
      }
    } catch (error) {
      console.error("Error during password comparison:", error);
    }
  } // DOES USER AUTHENTICATION AND RETURNS JWT TOKEN
} /////////////////////////////////////////////////////////

module.exports = UserAuthentication;

/*async authandlogin(email, password) {   
    const {id, currentpassword} = await this.userRepository.getUserByEmailforAuth(email);
       console.log({id, currentpassword});
       if(!currentpassword === password) {
        throw new Error('Invalid email or password');
      }
      else{
       const token = this.authtoken.createToken({id}, email);
       return token
      }
      
      }//NOT NEEDED ANYMORE FOR USER AUTHENTICATION
      */
