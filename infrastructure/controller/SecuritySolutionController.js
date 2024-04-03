const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const SecSolUseCases = require("../../usecase/Assets/SecuritySolution/SecuritySolUseCases.js");// create a security sol usecase js
const SecSol = new SecSolUseCases();
//a separate repo only for creating and altering tables
const TablesRepo = require("../repository/TablesRepository")
const TablesRepository = new TablesRepo();
//apis for creating a table and then altering the table 
/*router.post("/createtable", async (req, res) => {
    try {
      
      const table = await TablesRepository.createSecSol() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterSecSol()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });*/
  router.post("/addsecsol",async (req, res) => {
    try {
      console.log(req.body)
      const Data = req.body;
      const result = await SecSol.add(Data);// the db returns the id of new Laptop
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } );

  router.get("/getsecsol/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await SecSol.get(id)
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Sec Sol not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.get("/getsecsols",async (req, res) => {
    try {
      
      const result = await SecSol.getAll();
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "SecSol not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );
  
  router.delete("/deletesecsol/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await SecSol.delete(id);
      if (result) {
        res.status(201).json(result,{ message: "SecSol deleted" });
      } else {
        res.status(404).json({ message: "SecSol not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.patch("/updatesecsol/:id",async (req, res) => {
    try {
      const { id } = req.params;
      const Data = req.body;
      const result = await SecSol.update(id, Data);
      res.status(201).json(result,{message:"SecSol updated successfully"});
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