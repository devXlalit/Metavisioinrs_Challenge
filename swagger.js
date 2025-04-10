// swagger.js
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "HATO Help Request API",
    version: "1.0.0",
    description: "A simple REST API for help requests",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // points to where your route comments live
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
