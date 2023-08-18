const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: "db4free.net",
    user: "israelsdn",
    password: "j20100901c",
    database: "bancorael"
})

module.exports = connection;