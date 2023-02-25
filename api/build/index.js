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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_controller_1 = require("./controller/api.controller");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.apiController = new api_controller_1.ApiController(); // Cria uma nova instância da api controller
        this.routes();
    }
    configuration() {
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiController = new api_controller_1.ApiController();
            this.app.use(`/api`, this.apiController.router);
        });
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Api is running and listening on port ${this.app.get('port')}!`);
        });
    }
}
const server = new Server();
server.start();
