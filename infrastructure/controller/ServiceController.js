const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
//const ServiceUseCases = require("../../usecase/Assets/Service/ServiceUseCases");
//const service = new ServiceUseCases();
//a separate repo only for creating and altering tables
const TablesRepo = require("../repository/TablesRepository")
const TablesRepository = new TablesRepo();
//apis for creating a table and then altering the table 
router.post("/createtable", async (req, res) => {
    try {
      
      const table = await TablesRepository.createService() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterService()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  module.exports = router;