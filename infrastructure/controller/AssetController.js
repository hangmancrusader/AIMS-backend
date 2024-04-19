const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const AssetUseCases = require("../../usecase/Assets/AssetUseCases");
const Asset = new AssetUseCases();// create Assetusecase.js
const TablesRepo = require("../repository/TablesRepository")
const TablesRepository = new TablesRepo();
//a separate repo only for creating and altering tables
//apis for creating a table and then altering the table 
/*router.post("/createtable", async (req, res) => {
    try {
      
      const table = await TablesRepository.createAsset() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterAsset()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });*/
  router.post("/addassets",async (req, res) => {
    try {
      console.log(req.body)
      const data = req.body;
      const result = await Asset.add(data);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } );
  module.exports = router;