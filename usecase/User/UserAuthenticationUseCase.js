const UserRepository = require('../../infrastructure/repository/UserRepository.js');
const User = require('../../entitities/User.js')
const jwttoken = require('jsonwebtoken');
const authtoken = require('../../infrastructure/middleware/authTokenService.js');
const bcrypt = require('bcrypt');
class UserAuthentication{
    constructor(){
        this.userRepository = new UserRepository();
        this.authtoken = new authtoken();
        
    }
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

      async verifyuserlogin(email, password) {
        // Logic to authenticate a user using bcrypt
     
        try{  
        const userinput = password;
        const {id, currentpassword} = await this.userRepository.getUserHashforAuth(email);
        console.log(id);
        const hashedpassword = currentpassword;
        
        const match = await bcrypt.compare(userinput, hashedpassword);

        if (!match) {
            throw new Error('Invalid email or password');
            
        } 
        else 
        {
            const token = this.authtoken.createToken({id}, email);
            return token;
        }
    } catch (error) {
        console.error('Error during password comparison:', error);
    }
     
    }// DOES USER AUTHENTICATION AND RETURNS JWT TOKEN

}

module.exports= UserAuthentication;