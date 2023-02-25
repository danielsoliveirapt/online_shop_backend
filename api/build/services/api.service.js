"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const axios = require('axios');
class ApiService {
    constructor() {
        this.getDataFromApiProducts = () => {
            axios.get('http://localhost:4545/listProducts')
                .then(function (response) {
                //console.log(response.data)
                return response.data;
            });
        };
    }
}
exports.ApiService = ApiService;
