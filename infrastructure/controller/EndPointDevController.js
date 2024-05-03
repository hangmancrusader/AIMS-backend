const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const EndPointDeviceUseCases = require("../../usecase/Assets/EndPointDevice/EndPointDeviceUseCases.js");
const EndPointDevice = new EndPointDeviceUseCases();//create a endpointdevice usecase
//a separate repo only for creating and altering tables
const TablesRepo = require("../repository/TablesRepository")
const TablesRepository = new TablesRepo();
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
//apis for creating a table and then altering the table 
/*router.post("/createtable", async (req, res) => {
    try {
      
      const table = await TablesRepository.createEndPointDev() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterEndPointDev()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });*/

  router.post("/addendpointdev", authenticateToken,async (req, res) => {
    try {
      console.log(req.body)
      const data = req.body;
      const result = await EndPointDevice.add(data);// the db returns the id of new Laptop
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } );

  router.get("/getendpointdev/:id", authenticateToken, async (req, res) => {
    try {
      const {id}= req.params;
      const result = await EndPointDevice.get(id)
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.get("/getendpointdev", authenticateToken, async (req, res) => {
    try {
      
      const result = await EndPointDevice.getAll();
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.delete("/deleteendpointdev/:id", authenticateToken, async (req, res) => {
    try {
      const {id}= req.params;
      const result = await EndPointDevice.delete(id);
      if (result) {
        res.status(201).json(result,{ message: "Devices deleted" });
      } else {
        res.status(404).json({ message: "Devices not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.patch("/updateendpointdev/:id", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await EndPointDevice.update(id, data);
      if (result && result.length > 0) {
        res.status(201).json({message: "Updated Successfully",result});
      } else {
        res.status(404).json({ message: "Resource not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } );


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
  module.exports = router;