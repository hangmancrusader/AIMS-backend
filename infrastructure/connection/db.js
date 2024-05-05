// db.js
//const {Client} = require('pg');
//connectinf to DB with pool instead of client
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const dbConfig = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.DB_PORT,
  connectionString: process.env.POSTGRES_URL
};

const pool = new Pool(dbConfig);
console.log('Connected to PostgreSQL database using connection pool'); // Custom log message

// ... (Rest of your db.js code)
/*const client = new Client(dbConfig);

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');


   // Close the connection when done
    /* client.end()
        .then(() => {
          console.log('Connection to PostgreSQL closed');
        })
        .catch((err) => {
          console.error('Error closing connection', err);
        });
    
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
  });*/
module.exports = pool;
