const express = require('express');
const UserUseCases = require('../../usecase/User/UserUseCases.js');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const UserAuthentication = require("../../usecase/User/UserAuthenticationUseCase.js")
const rootUser = new UserUseCases();
const authUser = new UserAuthentication()



//USER ADMINISTRATION ROUTES
//post a user to the database - uses the jwt token of admin created upon admin login
router.post("/homepage/User_Administration/createnewuser",authenticateToken, async (req, res) => {
  try {
    console.log(req.body)
    const userData = req.body;
    const newUser = await rootUser.addUser(userData); // Call addUser on userUseCases instance
    res.status(201).json(newUser);
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
    await rootUser.updateUser(id, userData);
    //res.status(204).send();
    res.status(201).json({message:"User updated successfully"});
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
/*router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await rootUser.login(email, password);
    //console.log("user is" +user);
    res.json({message: "Login successful"});
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});*/
//should return JWT token and user ROLE ID to frontend
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authUser.authandlogin(email, password);
    console.log("user is " +user);
    res.json({message: "Login successful"});
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
