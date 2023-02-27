
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
    ? "build/src/routes/api.routes.js"
    : "src/routes/api.routes.ts",
];

(async () => {
  await swaggerAutogen(outputFile, endpointsFiles, doc);
})();