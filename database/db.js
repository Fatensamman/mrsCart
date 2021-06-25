const mysql = require("mysql2");
require('dotenv').config()

const client = mysql.createConnection({
    host:us-cdbr-east-04.cleardb.com,
    user: b78fc5bf03b867,
    password: da0844b7,
    database: heroku_ca738264f38a57a,
});

client.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + client.threadId);
});

module.exports = client;
