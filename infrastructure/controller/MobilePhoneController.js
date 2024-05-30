const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authorizeUserRole = require("../middleware/authorizeUserRoleService.js");
const MobilePhUseCases = require("../../usecase/Assets/EndPointDevice/MobilePhoneUseCases");
const MobilePh = new MobilePhUseCases();
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
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fastcsv = require("fast-csv");

//apis for creating a table and then altering the table
/*router.post("/createtable", async (req, res) => {
    try {
      
      const table = await TablesRepository.createMphone() 
      res.status(201).json({message: "Table created successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post("/altertable", async (req, res) => {
    try {
       const table = await TablesRepository.alterMphone()
      res.status(201).json({message: "Table altered successfully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });*/

router.post(
  "/addmobilephone",
  authorizeUserRole(["RootUser", "Endpoint Devices Custodian"]),
  authenticateToken,
  async (req, res) => {
    try {
      console.log(req.body);
      const mobileData = req.body;
      const result = await MobilePh.add(mobileData); // the db returns the id of new Laptop
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

router.get(
  "/getmobilephone/:id",
  authorizeUserRole(["RootUser", "Endpoint Devices Custodian"]),
  authenticateToken,
  async (req, res) => {
    try {
      const { id } = req.params;
      const result = await MobilePh.get(id);
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Mobile not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

router.get(
  "/getmobilephones",
  authorizeUserRole(["RootUser", "Endpoint Devices Custodian"]),
  authenticateToken,
  async (req, res) => {
    try {
      const result = await MobilePh.getAll();
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: "Mobile Phones not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

router.delete(
  "/deletemobilephone/:id",
  authorizeUserRole(["RootUser", "Endpoint Devices Custodian"]),
  authenticateToken,
  async (req, res) => {
    try {
      const { id } = req.params;
      const result = await MobilePh.delete(id);
      if (result) {
        res.status(201).json({ message: "Deleted successfully" });
      } else {
        res.status(404).json({ message: "Asset not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

router.patch(
  "/updatemobilephone/:id",
  authorizeUserRole(["RootUser", "Endpoint Devices Custodian"]),
  authenticateToken,
  async (req, res) => {
    try {
      const { id } = req.params;
      const Data = req.body;
      const result = await MobilePh.update(id, Data);
      if (result && result.length > 0) {
        res.status(201).json({ message: "Updated Successfully", result });
      } else {
        res.status(404).json({ message: "Resource not found" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

router.post(
  "/upload-mobile-csv",
  upload.single("csvfile"),
  authorizeUserRole(["RootUser", "Endpoint Devices Custodian", "System Admin"]),
  authenticateToken,
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send("No CSV file uploaded");
      }

      const csvData = [];
      const filePath = req.file.path;

      const csvStream = fastcsv
        .parse()
        .on("data", function (data) {
          csvData.push(data);
        })
        .on("end", async function () {
          csvData.shift(); // Remove header

          try {
            await MobilePh.processCSV(csvData);
            res.status(200).send("CSV data uploaded successfully");
          } catch (error) {
            console.error(error);
            res.status(500).send("Error processing CSV data");
          } finally {
            // Cleanup: remove uploaded file
            //fs.unlinkSync(filePath);
            console.log("File hellooooooooo");
          }
        });

      const readStream = fs.createReadStream(filePath);
      readStream.pipe(csvStream);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
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
