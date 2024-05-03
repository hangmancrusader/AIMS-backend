const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const LaptopUseCases = require("../../usecase/Assets/EndPointDevice/LaptopUseCases.js");
const Laptop = new LaptopUseCases();

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
      
      const table = await TablesRepository.createLaptop() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterLaptop()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });*/
  router.post("/addlaptop",validateSchema(newLaptopSchema),authenticateToken,async (req, res) => {
    try {
      console.log(req.body)
      const laptopData = req.body;
      const result = await Laptop.add(laptopData);// the db returns the id of new Laptop
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } );

  router.get("/getlaptop/:id", authenticateToken, async (req, res) => {
    try {
      const {id}= req.params;
      const result = await Laptop.get(id)
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Laptop not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.get("/getlaptops", authenticateToken, async (req, res) => {
    try {
      
      const result = await Laptop.getAll();
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Laptops not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.delete("/deletelaptop/:id", authenticateToken, async (req, res) => {
    try {
      const {id}= req.params;
      const result = await Laptop.delete(id);
      if (result) {
        res.status(201).json(result,{ message: "Laptops deleted" });
      } else {
        res.status(404).json({ message: "Laptop not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.patch("/updatelaptop/:id", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const laptopData = req.body;
      const result = await Laptop.update(id, laptopData);
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