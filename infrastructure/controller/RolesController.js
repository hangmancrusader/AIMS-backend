const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const RoleUseCases = require("../../usecase/Assets/Role/RoleUseCases.js");
const Role = new RoleUseCases();
//a separate repo only for creating and altering tables
const TablesRepo = require("../repository/TablesRepository");
const authorizeUserRole = require("../middleware/authorizeUserRoleService.js");
const TablesRepository = new TablesRepo();

/*router.post("/createtable", async (req, res) => {
    try {
      
      const table = await TablesRepository.createRole();
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
*/
router.post(
  "/homepage/newrole",
  authorizeUserRole(["RootUser"]),
  authenticateToken,
  async (req, res) => {
    try {
      const roleData = req.body;
      const result = await Role.addRole(roleData);
      //res.status(201).json(newRole);
      if (result === "error") {
        res.status(400).json({ error: "Not added, recheck fields" });
      } else {
        const id = result;
        res.status(201).json(id);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

router.get(
  "/homepage/getrole/:id",
  authorizeUserRole(["RootUser"]),
  authenticateToken,
  async (req, res) => {
    try {
      const { id } = req.params;
      const role = await Role.getRole(id);
      if (role) {
        res.status(201).json(role);
      } else {
        res.status(404).json({ message: "Role not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

router.get(
  "/homepage/getroles",
  authorizeUserRole(["RootUser"]),
  authenticateToken,
  async (req, res) => {
    try {
      const { id } = req.params;
      const role = await Role.getAllRoles(id);
      if (role) {
        res.status(201).json(role);
      } else {
        res.status(404).json({ message: "Roles not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

router.delete(
  "/homepage/deleterole/:id",
  authorizeUserRole(["RootUser"]),
  async (req, res) => {
    try {
      const { id } = req.params;
      const role = await Role.deleteRole(id);
      if (role) {
        res.status(201).json(role);
      } else {
        res.status(404).json({ message: "Roles not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

router.patch(
  "/homepage/updaterole/:id",
  authorizeUserRole(["RootUser"]),
  async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await Role.updateRole(id, data);
      if (result && result.length > 0) {
        res.status(201).json({ message: "Updated Successfully", result });
      } else {
        res.status(404).json({ message: "Resource not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.status(401).json({ message: "JWT token is required" });

  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid JWT token" });
    req.user = user;
    next();
  });
}

module.exports = router;
