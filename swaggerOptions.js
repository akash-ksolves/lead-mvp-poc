module.exports = {
	definition: {
		openapi: "3.0.3",
		info: {
			title: "API Documentation",
			version: "1.0.0",
			description: "SWAGGER DOCS POC FOR API's",
		},
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
				},
			},
		},
		schemes: ["http", "https"],
		security: [
			{
				bearerAuth: [],
			},
		],
		tags: [
			{
				name: "Users",
			},
		],
	},
	apis: ["./routes/user/swaggerUser.yaml"],
};
