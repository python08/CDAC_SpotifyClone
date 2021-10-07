const mysql = require('mysql2') // 1

const pool = mysql.createPool({  // 2 from npm mysql copy this 
    host: 'localhost',
    user: 'root',
    password:'password',
    database: 'gaana',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  })


  module.exports=pool   // 3