const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const routes = require("./routes");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = require("./swaggerOptions");

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const specs = swaggerJsDoc(swaggerOptions);

const opts = {
	syntaxHighlight: {
		activated: false, // syntax highlighting dies on large results
	},
};

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, undefined, opts));

app.use("/api/v1", routes);

app.listen(PORT, () => console.log("App is running on: ", PORT));
