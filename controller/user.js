const db = require("../models");

const Users = db.User;

const createUser = async (req, res) => {
	try {
		const User = await Users.create(req.body);

		return res.status(200).json({
			status: "success",
			data: User,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ status: "error", message: error.message });
	}
};

const getAllUser = async (req, res) => {
	try {
		const User = await Users.findAll({ raw: true });
		return res.status(200).json({
			status: "success",
			data: User,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ status: "error", message: error.message });
	}
};

const getUser = async (req, res) => {
	try {
		const User = await Users.findByPk(req.params.id, { raw: true });
		return res.status(200).json({
			status: "success",
			data: User,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ status: "error", message: error.message });
	}
};

const updateUser = async (req, res) => {
	try {
		const [rowsAffected, [updatedUser]] = await Users.update(req.body, {
			where: { id: req.params.id },
			returning: true,
		});
		if (rowsAffected > 0) {
			return res.status(200).json({
				status: "success",
				data: updatedUser,
			});
		}
		return res
			.status(404)
			.json({ status: "error", message: "Not updated" });
	} catch (error) {
		return res
			.status(500)
			.json({ status: "error", message: error.message });
	}
};

const deleteUser = async (req, res) => {
	try {
		const data = await Users.destroy({ where: { id: req.params.id } });

		if (!data)
			return res.status(404).json({
				status: "success",
				message: "Not found for delete",
			});

		return res.status(200).json({
			status: "success",
			data,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ status: "error", message: error.message });
	}
};

module.exports = { getAllUser, getUser, createUser, deleteUser, updateUser };
