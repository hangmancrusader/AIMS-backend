const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const DatabaseUseCases = require("../../usecase/Assets/Database/DatabaseUseCases.js");
const database = new DatabaseUseCases();
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
//a separate repo only for creating and altering tables
const TablesRepo = require("../repository/TablesRepository")
const TablesRepository = new TablesRepo();
const validateSchema = require('..//middleware/validateService.js');

//apis for creating a table and then altering the table 
/*router.post("/createtable", async (req, res) => {
    try {
      
      const table = await TablesRepository.createDatabase() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterDatabase()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });*/

  router.post("/adddatabase",validateSchema(newDBSchema), async (req, res) => {
    try {
      console.log(req.body)
      const data = req.body;
      const result = await database.add(data);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } );

  router.get("/getdatabase/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await database.get(id)
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "database not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.get("/getdatabases",async (req, res) => {
    try {
      
      const result = await database.getAll();
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "database not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.delete("/deletedatabase/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await database.delete(id);
      if (result) {
        res.status(201).json(result,{ message: "database deleted" });
      } else {
        res.status(404).json({ message: "database not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.patch("/updatedatabase/:id",async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await database.update(id, data);
      res.status(201).json({message:"Database updated successfully",result});
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