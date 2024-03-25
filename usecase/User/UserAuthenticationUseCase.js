const UserRepository = require('../../infrastructure/repository/UserRepository.js');
const User = require('../../entitities/User.js')
const jwttoken = require('jsonwebtoken');
const authtoken = require('../../infrastructure/middleware/authTokenService.js');

class UserAuthentication{
    constructor(){
        this.userRepository = new UserRepository();
        this.authtoken = new authtoken();
        
    }
    async authandlogin(email, password) {
        // Logic to authenticate a user
        
    const {id, currentpassword} = await this.userRepository.getUserByEmailforAuth(email);
       console.log({id, currentpassword});
       if(!currentpassword === password) {
        throw new Error('Invalid email or password');
      }
      else{
       const token = this.authtoken.createToken({id}, email);
       return token
      }
      //implement token service
}
}

module.exports= UserAuthentication;