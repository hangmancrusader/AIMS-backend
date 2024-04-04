const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const ServiceUseCases = require("../../usecase/Assets/Service/ServiceUseCases.js");
const service = new ServiceUseCases();
//a separate repo only for creating and altering tables
const TablesRepo = require("../repository/TablesRepository")
const TablesRepository = new TablesRepo();
//apis for creating a table and then altering the table 
/*router.post("/createtable", async (req, res) => {
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
  });*/

  router.post("/addservice",async (req, res) => {
    try {
      console.log(req.body)
      const data = req.body;
      const result = await service.add(data);// the db returns the id of new Laptop
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } );

  router.get("/getservice/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await service.get(id)
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Service not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.get("/getservices",async (req, res) => {
    try {
      
      const result = await s.getAll();
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Services not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.delete("/deleteservice/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await service.delete(id);
      if (result) {
        res.status(201).json(result,{ message: "Service deleted" });
      } else {
        res.status(404).json({ message: "Service not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.patch("/updateservice/:id",async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await Laptop.update(id, data);
      res.status(201).json(result,{message:"Service updated successfully"});
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