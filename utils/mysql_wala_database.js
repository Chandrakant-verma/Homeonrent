const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Verma@2002',
    database: 'airbnb'
});

module.exports = pool.promise();