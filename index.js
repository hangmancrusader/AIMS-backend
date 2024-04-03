const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
//const connectOptions = require('./infrastructure/connection/db.js')
// add middleware for routehanddling and db config
const UserRepository = require('./infrastructure/repository/UserRepository.js')
const UserUseCases = require ('./usecase/User/UserUseCases.js')
const userRoutes = require('./infrastructure/controller/UserController.js');
const roleRoutes = require('./infrastructure/controller/RolesController.js');
const hostingRoutes = require('./infrastructure/controller/HostingController.js');
const vmRoutes =require('./infrastructure/controller/VMController.js');
const databaseRoutes = require('./infrastructure/controller/DatabaseController.js');
const applicationRoutes = require('./infrastructure/controller/ApplicationController.js');
const netdevRoutes = require('./infrastructure/controller/NetDevController.js');
const endpointdevRoutes = require('./infrastructure/controller/EndPointDevController.js');
const serviceRoutes = require('./infrastructure/controller/ServiceController.js');
const securitysolutionRoutes = require('./infrastructure/controller/SecuritySolutionController.js');
const laptopsRoutes = require("./infrastructure/controller/LaptopController.js");
const mobileRoutes = require("./infrastructure/controller/MobilePhoneController.js");
const printerRoutes = require('./infrastructure/controller/PrinterController.js');
const voipRoutes = require("./infrastructure/controller/VoIPController.js");
const assetRoutes = require("./infrastructure/controller/AssetController.js");
const ticketRoutes = require("./infrastructure/controller/TicketController.js");
//need to separate index and app.js?
//initiliazing repository with connectoption = db config and initializing usercases


const cors = require("cors")
app.use(
  cors({
    origin:"*"
  })
)
app.use(express.json());


//defining routes that handle req to the endpoints in controllers e.g /api/admin/adduser - /adduser in controller

app.use('/AIMS', userRoutes);
app.use('/AIMS', roleRoutes);
//app.use('/AIMS', hostingRoutes);
//app.use('/AIMS',vmRoutes); 
//app.use('/AIMS', databaseRoutes);
//app.use('/AIMS', applicationRoutes);
//app.use('/AIMS', netdevRoutes);
//app.use('/AIMS',endpointdevRoutes);
//app.use('/AIMS', serviceRoutes);
//app.use('/AIMS', securitysolutionRoutes);
//app.use('/AIMS', laptopsRoutes);
//app.use('/AIMS', printerRoutes);
//app.use('/AIMS', voipRoutes);
//app.use('/AIMS', ticketRoutes);
//app.use('/AIMS', mobileRoutes);
//app.use('/AIMS', assetRoutes);

//all tables created

//the below code fragment can be found in:
app.use(bodyParser.json());




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
