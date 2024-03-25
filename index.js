const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
//const connectOptions = require('./infrastructure/connection/db.js')
// add middleware for routehanddling and db config
const UserRepository = require('./infrastructure/repository/UserRepository.js')
const UserUseCases = require ('./usecase/User/UserUseCases.js')
const userRoutes = require('./infrastructure/controller/UserController.js');
//need to separate index and app.js?
//initiliazing repository with connectoption = db config and initializing usercases
const userRepository = new UserRepository();
const userUseCases = new UserUseCases();
app.use(express.json());


//defining routes that handle req to the endpoints in controllers e.g /api/admin/adduser - /adduser in controller

app.use('/AIMS', userRoutes);

app.use(bodyParser.json());




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
