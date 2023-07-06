const db = require("./models");

const Users = db.User;

async function getUsers() {
	const User = await Users.findAll();
	// const { dataValues: userData } = User;
	console.log(User);
}

getUsers();
