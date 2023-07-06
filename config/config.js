module.exports = {
	development: {
		username: process.env.USERNAME,
		password: process.env.PASSWORD,
		database: process.env.DB,
		host: process.env.HOST,
		dialect: "postgres",
	},
	test: {
		username: "root",
		password: null,
		database: "database_test",
		host: "localhost",
		dialect: "postgres",
	},
	production: {
		username: "root",
		password: null,
		database: "database_production",
		host: "localhost",
		dialect: "postgres",
	},
};
