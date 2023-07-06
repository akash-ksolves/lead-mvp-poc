const app = require("express")();
const swaggerUi = require("swagger-ui-express");
const routes = require("./routes");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOpts = require("./swaggerOptions");

const swaggerOptions = swaggerJsDoc(swaggerOpts);

const PORT = 3000;

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions, undefined));

app.use("/api/v1", routes);

app.listen(PORT, () => console.log("App is running on: ", PORT));
