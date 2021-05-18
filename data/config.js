const mysql=require('mysql');

const config ={
    host:'25.4.69.61',
    user:'root',
    password:'root',
    database:'api'
};
//Create a Mysql pool
const pool= mysql.createPool(config);

//Export the pool
module.exports=pool;