const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
    if (err) {
      console.log('DB ERROR', err);
    } else {
      console.log('Connected to DB!')
    }
  });

connection.query('DROP DATABASE IF EXISTS stork', (err, data) => {
  if(err) {
    console.log('Issue dropping stork DB');
  } else {
    console.log('Successfully dropped stork DB');
  }
});

connection.query('CREATE DATABASE IF NOT EXISTS stork', function(err, data) {
    if(err) {
      console.log('DB ERROR creating stork', err)
    } else {
      console.log(null, data)
    }
  });
  
  connection.query('USE stork', function(err, data) {
    if(err) {
      console.log('DB ERROR using stork', err)
    } else {
      console.log(null, data)
    }
  });
  
  connection.query(`CREATE TABLE IF NOT EXISTS items (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, itemName TEXT)`, function(err, data) {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log('Created ingredients table in stork DB')
    }
  });


  

  module.exports.connection = connection;