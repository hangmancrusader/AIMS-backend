const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const LaptopUseCases = require("../../usecase/Assets/EndPointDevice/LaptopUseCases.js");
const Laptop = new LaptopUseCases();

//a separate repo only for creating and altering tables
const TablesRepo = require("../repository/TablesRepository")
const TablesRepository = new TablesRepo();
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
  router.post("/addlaptop",async (req, res) => {
    try {
      console.log(req.body)
      const laptopData = req.body;
      const result = await Laptop.add(laptopData);// the db returns the id of new Laptop
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } );

  router.get("/getlaptop/:id",async (req, res) => {
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

  router.get("/getlaptops",async (req, res) => {
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

  router.delete("/deletelaptop/:id",async (req, res) => {
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

  router.patch("/updatelaptop/:id",async (req, res) => {
    try {
      const { id } = req.params;
      const laptopData = req.body;
      const result = await Laptop.update(id, laptopData);
      res.status(201).json(result,{message:"Laptop updated successfully"});
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