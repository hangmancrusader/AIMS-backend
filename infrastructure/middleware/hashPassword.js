const bcrypt = require('bcrypt');

const hashedPasswordMiddleware = async(req,res, next) =>{
    try{
        const saltRounds = 10;
        const {currentPassword} = req.body;
        
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(currentPassword, salt);
        req.body.currentPassword = hashedPassword; //update the password to its hash
        next();
    } catch (error) {
        console.error('Error during password hashing:', error);
        res.status(500).send('Error during password hashing');
    }
};

module.exports = hashedPasswordMiddleware;