"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield swaggerAutogen(outputFile, endpointsFiles, doc);
}))();
