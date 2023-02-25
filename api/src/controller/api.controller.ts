import { Router, Response, Request } from "express";
const axios = require('axios');
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

export class ApiController{
  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public getProducts = (req: Request, res: Response) => {
    const url = 'http://localhost:4545/listProducts';
    axios.get(url)
    .then(function(response: any) {
      try {
        res.status(200).send(response.data);
      } catch (error) {
        res.status(500).send(error);
      }
    });
  }

  public addProduct = async (req: Request, res: Response) => {
    const url = 'http://localhost:5555/products/';
    const data = req.body;
    axios.post(url, data)
    .then(function(response: any) {
      try {
        res.status(200).send('Product added with successfuly.');
      } catch (error) {
        res.status(500).send(error);
      }
    })
    .catch(function (error: any) {
      res.status(500).send(error);
    });
  }

  public removeProduct = (req: Request, res: Response) => {
    const url = 'http://localhost:5555/products/';
    axios.delete(url)
    .then(function(response: any) {
      try {
        res.status(200).send('Product deleted with successfuly.');
      } catch (error) {
        res.status(500).send(error);
      }
    });
  }

  public getCarts = (req: Request, res: Response) => {
    const url = 'http://localhost:5555/carts/';
    axios.get(url)
    .then(function(response: any) {
      try {
        res.status(200).send(response.data);
      } catch (error) {
        res.status(500).send(error);
      }
    });
  }

  public routes() {
    this.router.get('/getProducts', this.getProducts);
    this.router.post('/addProduct', jsonParser, this.addProduct);
    this.router.delete('/removeProduct/:id', this.removeProduct);
    this.router.get('/getCarts', this.getCarts);
  }
}