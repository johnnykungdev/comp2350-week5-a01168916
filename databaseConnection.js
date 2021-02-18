const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

//mysql://b6fb24cb4c8c37:702be0f5@us-cdbr-east-03.cleardb.com/heroku_a79dfbc72e06757?reconnect=true
const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "bdf70769937f85",
	password: "8b70283f",
	database: "heroku_058fe8747242c32",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "database1",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		