/*const bcrypt = require('bcrypt');
const UserRepository = require('../repository/UserRepository');
//import the repository of users to access the query;
//add a query to query the database and retreive the hash password from the db then compare it here with posted password from req,body
const verifyUser = async(req,res, next) =>{
    try{
        const {email, password} = req.body;
        console.log(email,password);
        const userinput = password;
        const {id, currentpassword} = await this.UserRepository.getUserHashforAuth(email);
        console.log(id);
        const hashedpassword= currentpassword;
        
        const match = await bcrypt.compare(userinput, hashedpassword);

        if (match) {
            res.status(200).send('Login successful');
            next();
        } else {
            
            res.status(401).send('Unauthorized: Incorrect password');
        }
    } catch (error) {
        console.error('Error during password comparison:', error);
        res.status(500).send('Error during password comparison');
    }
};

module.exports = verifyUser;
//not in use, implementation done in UserAUTHENTICATION USE CASES8*/