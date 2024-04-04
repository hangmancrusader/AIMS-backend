const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const TicketUseCases = require("../../usecase/Ticket/TicketUseCases");
const ticket = new TicketUseCases();
//a separate repo only for creating and altering tables
const TablesRepo = require("../repository/TablesRepository")
const TablesRepository = new TablesRepo();
//apis for creating a table and then altering the table 
/*router.post("/createtable", async (req, res) => {
    try {
      
      const table = await TablesRepository.createTicket() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterTicket()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });*/
  router.post("/addticket",async (req, res) => {
    try {
      console.log(req.body)
      const data = req.body;
      const result = await ticket.add(data);// the db returns the id of new Laptop
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } );

  router.get("/getticket/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await ticket.get(id)
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Ticket not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.get("/gettickets",async (req, res) => {
    try {
      
      const result = await ticket.getAll();
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Tickets not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.delete("/deleteticket/:id",async (req, res) => {
    try {
      const {id}= req.params;
      const result = await ticket.delete(id);
      if (result) {
        res.status(201).json(result,{ message: "Ticket deleted" });
      } else {
        res.status(404).json({ message: "Ticket not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } );

  router.patch("/updateticket/:id",async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await ticket.update(id, data);
      res.status(201).json(result,{message:"Ticket updated successfully"});
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