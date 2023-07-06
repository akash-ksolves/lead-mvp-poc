const router = require("express").Router();

router.get("/", (req, res) =>
	res.json({
		status: "success",
		message: "Succesfully user fetched data...!!",
	})
);

module.exports = router;
