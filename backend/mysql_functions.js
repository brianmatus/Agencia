const mysql = require("mysql2");

const mysqlPool = mysql.createPool({
    host: process.env["DB_HOST"],
    user: process.env["DB_USER"],
    password: process.env["DB_PASSWORD"],
    database: process.env["DB_SCHEMA"]
});

function executeQuery(query, values) {
    return new Promise((resolve, reject) => {
        mysqlPool.query(query, values, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

module.exports = {executeQuery}