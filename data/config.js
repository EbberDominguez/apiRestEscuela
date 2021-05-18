const mysql = require('mysql');

//set database connection
const config = {
    host: '25.4.36.222',
    user: 'root@localhost',
  //  password: 'root',
    database: 'APIDB',
};

//crear a mysql pool
const pool = mysql.createPool(config);
//export 
module.exports = pool;