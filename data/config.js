const mysql = require('mysql2');

//set database connection
const config = {
    host: '25.4.69.61',
    user: 'root',
    password: 'root',
    database: 'api',
};

//crear a mysql pool
const pool = mysql.createPool(config);
//export 
module.exports = pool;