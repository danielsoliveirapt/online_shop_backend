import { Router, Response, Request } from "express";
const axios = require('axios');

module.exports = {
  getProducts: async (req: Request, res: Response) => {
    // #swagger.tags = ['Produtos']
    // #swagger.summary = 'Endpoint que retorna todos os produtos da loja'
    const url = 'http://localhost:4545/listProducts';
    axios.get(url)
    .then(function(response: any) {
      res.send(response.data);
    });
  },
  addProduct: async (req: Request, res: Response) => {
    // #swagger.tags = ['Carrinho de compras']
    // #swagger.summary = 'Endpoint que permite adicionar produtos a um carrinho de compras'
    const url = 'http://localhost:5555/products/';
    const data = req.body;
    axios.post(url, data)
    .then(function(response: any) {
      // #swagger.responses[201] = { description: "Produto adicionado com sucesso." }
      res.send(response.data);
    });
  },
  removeProduct: async (req: Request, res: Response) => {
    // #swagger.tags = ['Carrinho de compras']
    // #swagger.summary = 'Endpoint para remover produtos de um carrinho de compras'
    const url = `http://localhost:5555/products/${req.params.id}`;
    axios.delete(url)
    .then(function(response: any) {
      // #swagger.responses[200] = { description: "Produto eliminado com sucesso." }
      res.send(response.data);
    });
  },
  addCart: async (req: Request, res: Response) => {
    // #swagger.tags = ['Carrinho de compras']
    // #swagger.summary = 'Endpoint que permite adicionar um carrinho de compras à loja'
    const url = 'http://localhost:5555/carts/';
    const data = req.body;
    axios.post(url, data)
    .then(function(response: any) {
      //#swagger.responses[201] = { description: "Carrinho adicionado com sucesso." }
      res.send(response.data);
    });
  },
  getCarts: async (req: Request, res: Response) => {
    // #swagger.tags = ['Carrinho de compras']
    // #swagger.summary = 'Endpoint que devolve os carinhos de compras da loja e os produtos que estão dentro dele'
    const url = 'http://localhost:5555/carts/';
    axios.get(url)
    .then(function(response: any) {
      res.send(response.data);
    });
  },
  auth: async (req: Request, res: Response) => {
    // #swagger.tags = ['Carrinho de compras']
    // #swagger.summary = 'Endpoint que devolve o token se o utilizador autenticar com sucesso'
    if(req.body.password == process.env.PASSWORD){
      const tokenData = {name: process.env.USERNAME, email: process.env.EMAIL, userid: process.env.USERID};
      const token = jwt.sign(tokenData, process.env.SECRETKEY, { expiresIn: '1d' });
      const response = [{
        "msg": "success",
        "message": "Login with success",
        "success": true,
        "status": 200,
        token: token 
      }];
      res.status(200).send(response);
    }else{
      const response = [{
        "msg": "invalid",
        "message": "Invalid login",
        "success": false,
        "status": 400
      }];
      res.status(200).send(response);
    }
  },
};