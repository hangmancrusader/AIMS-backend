const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const VMUseCases = require("../../usecase/Assets/VirtualMachine/VMUseCases.js");
const VM = new VMUseCases();
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
      
      const table = await TablesRepository.createVM() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterVM()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });*/
router.post(
  "/addvm",
  validateSchema(newVMSchema),
  authenticateToken,
  async (req, res) => {
    try {
      console.log(req.body);
      const data = req.body;
      const result = await VM.add(data); // the db returns the id of new Laptop
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

router.get("/getvm/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VM.get(id);
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(404).json({ message: "VM not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/getvms", authenticateToken, async (req, res) => {
  try {
    const result = await VM.getAll();
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(404).json({ message: "VMs not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/deletevm/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VM.delete(id);
    if (result) {
      res.status(201).json({ message: "Deleted successfully" });
    } else {
      res.status(404).json({ message: "Asset not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/updatevm/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await VM.update(id, data);
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
