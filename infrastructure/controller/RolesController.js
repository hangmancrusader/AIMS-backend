const express = require('express');
const router = express.Router();
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const RoleUseCases = require("../../usecase/Assets/Role/RoleUseCases.js")
const Role = new RoleUseCases();

router.post("/homepage/newrole", authenticateToken,async (req, res) => {
    try {
      const roleData = req.body;
      const newRole = await Role.addRole(roleData); 
      res.status(201).json(newRole);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

router.get("/homepage/getrole/:id",authenticateToken, async (req, res) => {
  try {
    const {id}= req.params;
    const role = await Role.getRole(id);
    if (role) {
      res.status(201).json(role);
    } else {
      res.status(404).json({ message: "Role not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/homepage/getroles",authenticateToken, async (req, res) => {
  try {
    const {id}= req.params;
    const role = await Role.getAllRoles(id);
    if (role) {
      res.status(201).json(role);
    } else {
      res.status(404).json({ message: "Roles not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/homepage/deleterole/:id", async (req, res) => {
  try {
    const {id}= req.params;
    const role = await Role.deleteRole(id);
    if (role) {
      res.status(201).json(role);
    } else {
      res.status(404).json({ message: "Roles not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/homepage/updaterole/:id", async (req, res) => {
  try {
    const {id}= req.params;
    const data =  req.body;
    const result = await Role.updateRole(id,data);
    if (result && result.length > 0) {
      res.status(201).json({message: "Updated Successfully",result});
    } else {
      res.status(404).json({ message: "Resource not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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