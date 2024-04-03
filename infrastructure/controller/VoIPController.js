const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const VoIPUseCases = require("../../usecase/Assets/EndPointDevice/VoIPUseCases");
const voip = new VoIPUseCases();
//a separate repo only for creating and altering tables
const TablesRepo = require("../repository/TablesRepository")
const TablesRepository = new TablesRepo();
//apis for creating a table and then altering the table 
/*router.post("/createtable", async (req, res) => {
    try {
      
      const table = await TablesRepository.createVOIP() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterVOIP()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });*/
  router.post("/addvoip",async (req, res) => {
    try {
      console.log(req.body)
      const Data = req.body;
      const result = await voip.add(Data);// the db returns the id of new 
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } );

  router.get("/getvoip/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await voip.get(id)
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "VoIP not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.get("/getvoips",async (req, res) => {
    try {
      
      const result = await voip.getAll();
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "VoIPs not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );
  
  router.delete("/deletevoip/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await voip.delete(id)
      if (result) {
        res.status(201).json(result,{ message: "VoIP deleted" });
      } else {
        res.status(404).json({ message: "VoIP not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.patch("/updatevoip/:id",async (req, res) => {
    try {
      const { id } = req.params;
      const Data = req.body;
      const result = await voip.update(id, Data);
      res.status(201).json(result,{message:"VoIP updated successfully"});
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