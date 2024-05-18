const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const NetDevUseCases = require("../../usecase/Assets/NetworkDevice/NetDevUseCases");
const NetDev = new NetDevUseCases();
//a separate repo only for creating and altering tables
const TablesRepo = require("../repository/TablesRepository");
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
  newMobilePhoneSchema
} = require("../middleware/yupConfig.js");
const validateSchema = require("..//middleware/validateService.js");
//apis for creating a table and then altering the table
/*router.post("/createtable", async (req, res) => {
    try {
      
      const table = await TablesRepository.createNetDev() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterNetDev()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  */
router.post(
  "/addnetdev",
  validateSchema(newNetworkDeviceSchema),
  authenticateToken,
  async (req, res) => {
    try {
      console.log(req.body);
      const Data = req.body;
      const result = await NetDev.add(Data); // the db returns the id of new Laptop
      //res.status(201).json(result);
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

router.get("/getnetdev/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await NetDev.get(id); // the db returns the id of new L
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(404).json({ message: "Net Dev not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/getnetdevs", authenticateToken, async (req, res) => {
  try {
    const result = await NetDev.getAll();
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(404).json({ message: "Net Devs not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/deletenetdev/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await NetDev.delete(id);
    if (result) {
      res.status(201).json({ message: "Deleted successfully" });
    } else {
      res.status(404).json({ message: "Asset not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/updatenetdev/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const Data = req.body;
    const result = await NetDev.update(id, Data);
    if (result && result.length > 0) {
      res.status(201).json({ message: "Updated Successfully", result });
    } else {
      res.status(404).json({ message: "Resource not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

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
