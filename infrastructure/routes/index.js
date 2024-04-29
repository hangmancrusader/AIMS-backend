/*

//const connectOptions = require('./infrastructure/connection/db.js')
// add middleware for routehanddling and db config
//const UserRepository = require('./infrastructure/repository/UserRepository.js')
//const UserUseCases = require ('./usecase/User/UserUseCases.js')
const userRoutes = require('../controller/UserController.js');
const roleRoutes = require('../controller/RolesController.js');
const hostingRoutes = require('../controller/HostingController.js');
const vmRoutes =require('../controller/VMController.js');
const databaseRoutes = require('../controller/DatabaseController.js');
const applicationRoutes = require('../controller/ApplicationController.js');
const netdevRoutes = require('../controller/NetDevController.js');
const endpointdevRoutes = require('../controller/EndPointDevController.js');
const serviceRoutes = require('../controller/ServiceController.js');
const securitysolutionRoutes = require('../controller/SecuritySolutionController.js');
const laptopsRoutes = require("../controller/LaptopController.js");
const mobileRoutes = require("../controller/MobilePhoneController.js");
const printerRoutes = require('../controller/PrinterController.js');
const voipRoutes = require("../controller/VoIPController.js");
const assetRoutes = require("../controller/AssetController.js");
const ticketRoutes = require("../controller/TicketController.js");
//need to separate index and app.js?


//defining routes that handle req to the endpoints in controllers e.g /api/admin/adduser - /adduser in controller
//
/**
 * @param {Express} app
 */
/*
const router = (app) => {
app.use('/AIMS', userRoutes);
app.use('/AIMS', roleRoutes);
app.use('/AIMS', hostingRoutes);
app.use('/AIMS',vmRoutes); 
app.use('/AIMS', databaseRoutes);
app.use('/AIMS', applicationRoutes);
app.use('/AIMS', netdevRoutes);
app.use('/AIMS',endpointdevRoutes);
app.use('/AIMS', serviceRoutes);
app.use('/AIMS', securitysolutionRoutes);
app.use('/AIMS', laptopsRoutes);
app.use('/AIMS', printerRoutes);
app.use('/AIMS', voipRoutes);
//app.use('/AIMS', ticketRoutes);
app.use('/AIMS', mobileRoutes);
app.use('/AIMS', assetRoutes);
}

module.exports = router*/
// exports router to be mounter on index.js that is the entry point



