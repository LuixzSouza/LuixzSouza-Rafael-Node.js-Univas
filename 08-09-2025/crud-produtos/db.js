const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'db_luixz'
})

module.exports = pool;