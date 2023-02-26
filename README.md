# online-shop-backend

Este projeto conta com 3 aplicações backend:
 - REST API (com 4 endpoints que consomem por http os microserviços products e shoppingCar)
 - Microserviço products
 - Microserviço shoppingCart

 ## Indice
* [Microserviço products](#microservico-products)
* [Microserviço shoppingCart](#microservico-shoppingcart)
* [REST API](#rest-api)

## Microserviço products

- Para este microserviço foi criada uma Rest API através do express e está à escuta na porta 4545 (http://localhost:4545)
- Este serviço através do ODM (object data modeling) Mongoose conecta-se a uma base de dados Mongo que está alojada no cluster MongoDB Atlas.
  
### Microserviço products Endpoints

| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /listProducts | retorna todos os produtos disponíveis na collection products |
| POST | /addProduct | permite adicionar um produto na collection products (não solicitado) |

## Microserviço shoppingCart

- Para este microserviço foi criada uma Rest API através do express e está à escuta na porta 5555 (http://localhost:5555)
- Este microserviço usa o ORM (Object-relational mapping) TypeORM para mapear as entidades Cart e Product numa base de dados MySQL, onde esta duas entidades estão ligada através de uma relação um-para-muitos, ou seja, um Cart pode ter muitos Product.
  
### ShoppingCart Endpoints

| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /products | retorna todos os produtos da tabelas products (não solicitado) |
| POST | /products | permite adicionar um produto à tabela products |
| DELETE | /products/:id | permite remover um produto da tabelas products |
| GET | /carts | retorna todos os carrinhos de compras da lojas e os produtos dentro da cada carrinho |


## API Rest

- Esta API Rest está à escuta na porta 3000 (http://localhost:3000) e consome os microserviçoes através da biblioteca AXIOS.

### Pedido

`GET /api/auth`

    Este endpoint serve para fazer autenticação na API, que no caso de ser feita com sucesso é obtido um token que devemos utilizar no cebeçalho dos restantes endpoints desta API como parametro authorization

#### Headers
| Chave | Valor |
| --- | --- |
| password | {password} |


#### Exemplo de Resposta (200 OK)
```json
{
    "msg": "success",
    "message": "Login with success",
    "success": true,
    "status": 200,
    "token": "token"
}
```

#### Exemplo de Resposta (caso não tenha a password correta)
```json
{
    "msg": "invalid",
    "message": "Invalid login",
    "success": false,
    "status": 400
}
```

### Pedido

`GET /api/getProducts`

    Este endpoint consome a API do microserviço products e retorna todos os produtos inserido na collection products

#### Headers
| Chave | Valor |
| --- | --- |
| authorization | {token} |


#### Exemplo de Resposta (200 OK)
```json
{
        "_id": "63f7370935d5d16b45445ed5",
        "productId": "2346787",
        "price": 500,
        "__v": 0
    },
    {
        "_id": "63f7378c35d5d16b45445ed9",
        "productId": "192663",
        "price": 267,
        "__v": 0
    },
    {
        "_id": "63f739e6305f6e153454f48c",
        "productId": "1956783",
        "price": 432,
        "__v": 0
    },
```

### Pedido

`POST /api/addProduct`

    Este endpoint consome a API do microserviço shoppingCart e permite adicionar um produto a um carrinho de compras.
    Nota: este endepoint além de adicionar o produto atualiza os campos "totalPrice" e "totalQuantity" do carrinho de compras especidicado no campo "cartShoppingCartId"


#### Headers
| Chave | Valor |
| --- | --- |
| authorization | {token} |

#### Body
```json
{
    "price": 200,
    "quantity": 4,
    "productId": "198554",
    "cartShoppingCartId": 1
}
```

#### Exemplo de Resposta (200 OK)
```json
{
    "msg": "success",
    "message": "Record inserted with success",
    "success": true,
    "status": 201
}
```

### Pedido

`DELETE /api/removeProduct/:id`

    Este endpoint consome a API do microserviço shoppingCart e permite remover o produto especificado no parâmetro :id da tabela products
    Nota: este endepoint além de remover o produto atualiza os campos "totalPrice" e "totalQuantity" do carrinho de compras especidicado no campo "cartShoppingCartId"

#### Headers
| Chave | Valor |
| --- | --- |
| authorization | {token} |

#### Exemplo de Resposta (200 OK)
```json
{
    "msg": "success",
    "message": "Records deleted with success",
    "success": true,
    "status": 200
}
```

### Pedido

`GET /api/getCarts`

    Este endpoint consome a API do microserviço shoppingCart e retorna todos os carrinhos de compras e os produtos associados a cada um.

#### Headers
| Chave | Valor |
| --- | --- |
| authorization | {token} |


#### Exemplo de Resposta (200 OK)
```json
{
    "shoppingCartId": 1,
    "userId": "11111111",
    "totalPrice": 267,
    "totalQuantity": 1,
    "products": [
      {
          "id": 1,
          "productId": "192663",
          "price": 267,
          "quantity": 1,
          "cartShoppingCartId": 1
      },
      {
          "id": 3,
          "productId": "195783",
          "price": 457,
          "quantity": 1,
          "cartShoppingCartId": 1
      }
    ]
},
{
  "shoppingCartId": 2,
  "userId": "22222222",
  "totalPrice": 3324,
  "totalQuantity": 32,
  "products": [
      {
          "id": 4,
          "productId": "346578",
          "price": 124,
          "quantity": 1,
          "cartShoppingCartId": 2
      },
      {
          "id": 5,
          "productId": "198554",
          "price": 200,
          "quantity": 1,
          "cartShoppingCartId": 2
      },
  ]
}
```

### Testes
    Através do JetTest executei alguns testes à API

```json
describe("Test app.ts", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "API Online Shop." });
  });
});

describe("API routes", () => {
  test("should return 200 & add product", async () => {
    const product = {
      "price": 200,
      "quantity": 4,
      "productId": "198554",
      "cartShoppingCartId": 2
    }
    const token = "token";
    const res = await request(app).post("/api/addProduct").set('authorization', `${token}`).send(product);
    expect(res.body).toEqual({
      "msg": "success",
      "message": "Record inserted with success",
      "success": true,
      "status": 201
    });
  });
});
```
