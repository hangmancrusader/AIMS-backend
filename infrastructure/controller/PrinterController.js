const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const PrinterUseCases = require("../../usecase/Assets/EndPointDevice/PrinterUseCases");
const Printer = new PrinterUseCases();
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
      
      const table = await TablesRepository.createPrinter() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterPrinter()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });*/

  router.post("/addprinter",validateSchema(newPrinterSchema),async (req, res) => {
    try {
      console.log(req.body)
      const Data = req.body;
      const result = await Printer.add(Data);// the db returns the id of new Laptop
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } );

  router.get("/getprinter/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await Printer.get(id);
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Printer not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.get("/getprinters",async (req, res) => {
    try {
      
      const result = await Printer.getAll();
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Printers not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );
  
  router.delete("/deleteprinter/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await Printer.delete(id);
      if (result) {
        res.status(201).json(result,{ message: "Printer deleted" });
      } else {
        res.status(404).json({ message: "Printer not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.patch("/updateprinter/:id",async (req, res) => {
    try {
      const { id } = req.params;
      const Data = req.body;
      const result = await Printer.update(id, Data);
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