
// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config()

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.dbNAME, process.env.dbUSER, process.env.dbPASS, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
    port: 3306
});

module.exports = sequelize;