
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'online-shop-backend',
    description: 'Online Shop',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'authorization',
      description: 'get token from login',
    },
  },
  security: [
    {
      apiKeyAuth: [],
    },
  ],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  process.env.npm_lifecycle_event === "swagger"
    ? "build/controller/api.controller.js"
    : "src/controller/api.controller.ts",
];

(async () => {
  await swaggerAutogen(outputFile, endpointsFiles, doc);
})();