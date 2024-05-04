const express = require('express');
const UserUseCases = require('../../usecase/User/UserUseCases.js');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const UserAuthentication = require("../../usecase/User/UserAuthenticationUseCase.js")
const rootUser = new UserUseCases();
const authUser = new UserAuthentication()
const {
  generateSchema,
  newServiceSchema,
  newDBSchema,
  newApplicationSchema,
  newLaptopSchema,
  newHostingSchema,
  newNetworkDeviceSchema,
  newVMSchema,
  newSecuritySolutionSchema,
  newVOIPSchema,
  newPrinterSchema,
  newMobilePhoneSchema} = require('../middleware/yupConfig.js');
const validateSchema = require('..//middleware/validateService.js');
const hashPassword = require('../middleware/hashPassword.js');
//const verifyUser = require('../middleware/verifyUser.js');
const fs = require('fs');
const multer  = require('multer');
const TablesRepo = require("../repository/TablesRepository")
const TablesRepository = new TablesRepo();
const upload  = multer({dest:'uploads/'})
//USER ADMINISTRATION ROUTES
//post a user to the database - uses the jwt token of admin created upon admin login
router.post("/homepage/User_Administration/createnewuser",upload.single('profilepic'),authenticateToken, hashPassword, async (req, res) => {
  try {
    
    const userData = req.body;
    const imageFile = fs.readFileSync(req.file.path);
    const base64Image = imageFile.toString('base64');
    req.body.profilepic = base64Image;
    const newUser = await rootUser.addUserwithPic(userData);
    if(newUser==='error'){
      res.status(400).json({ error: "Not added, recheck fields" });
    }
    else{
      const id = newUser;
    res.status(201).json({id})
    };
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


//was used to alter users table

router.post("/altertable", async (req, res) => {
  try {
     const table = await TablesRepository.alterUsers();
    res.status(201).json({message: "Table altered successfully"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});





//get a user from the database -this route needs JWT authentication
router.get("/homepage/User_Administration/user_management/user_profile/:id",authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await rootUser.getUser(id);
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get all users from the database -this route needs JWT authentication
router.get("/homepage/User_Administration/user_management/user_profile/",authenticateToken, async (req, res) => {
  try {
    
    const user = await rootUser.getAllUsers();
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(404).json({ message: "Users not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//update a user in the database -this route needs JWT authentication
router.patch("/homepage/User_Administration/user_management/user_profile/:id",authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const result = await rootUser.updateUser(id, userData);
    //res.status(204).send();
    if (result && result.length > 0) {
      res.status(201).json({message: "Updated Successfully",result});
    } else {
      res.status(404).json({ message: "Resource not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//no URL for this route yet
router.delete("/homepage/User_Administration/user_management/user_profile/deleteuser/:id",authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await rootUser.deleteUser(id);
    //res.status(204).send();
    res.status(201).json({message:"User deleted successfully"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//USER LOGIN ROUTES 
//- requires JWT authentication and OTP verification

//should return JWT token and user ROLE ID to frontend
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //const user = await authUser.authandlogin(email, password);
    const usertoken = await authUser.verifyuserlogin(email, password);
    //console.log("user is " +user);
    res.json({message: "Login successful",usertoken});
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});


router.post("/login/verify_acc/phone_verification", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await rootUser.login(email, password);
   
    console.log("user is" +user);
    
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.post("/login/verify_acc/email_verification", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserUseCases.login(email, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

//if OTP verification is successful then this route generates JWT authentication token and sends it to the client in response
router.post("/login/verify_acc/phone_verification/verifyOTP", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserUseCases.login(email, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.post("/login/verify_acc/email_verification/verifyOTP", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserUseCases.login(email, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.post("/login/verify_acc/phone_verification/resendOTP", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserUseCases.login(email, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.post("/login/verify_acc/email_verification/resendOTP", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserUseCases.login(email, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});


//middleware for JWT authentication
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).json({ message: 'JWT token is required' });

  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid JWT token' });
    req.user = user;
    next();
  });
}




// exports the User cpntroller
module.exports = router;
