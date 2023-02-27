import request from "supertest";

import app from "../../../src/app";

describe("API routes", () => {
  test("should return 201 & add product", async () => {
    const product = {
      "price": 200,
      "quantity": 4,
      "productId": "198554",
      "cartShoppingCartId": 203
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGFuaWUiLCJlbWFpbCI6InRlc3RlQG9ubGluZXNob3AucHQiLCJ1c2VyaWQiOiIxIiwiaWF0IjoxNjc3NDI5NjM5LCJleHAiOjE2Nzc1MTYwMzl9.ELVnMx_HlpzAg3EaLdXqDXRb3lWRF5302ZU1AELxI6s";
    const res = await request(app).post("/api/addProduct").set('authorization', `${token}`).send(product);
    expect(res.body).toEqual({
      "msg": "success",
      "message": "Record inserted with success",
      "success": true,
      "status": 201
    });
  });

  test("should return 201 & add cart", async () => {
    const cart = {
      "userId": "4444444",
      "totalPrice": 0,
      "totalQuantity": 0
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGFuaWUiLCJlbWFpbCI6InRlc3RlQG9ubGluZXNob3AucHQiLCJ1c2VyaWQiOiIxIiwiaWF0IjoxNjc3NDI5NjM5LCJleHAiOjE2Nzc1MTYwMzl9.ELVnMx_HlpzAg3EaLdXqDXRb3lWRF5302ZU1AELxI6s";
    const res = await request(app).post("/api/addCart").set('authorization', `${token}`).send(cart);
    expect(res.body).toEqual({
      "msg": "success",
      "message": "Record inserted with success",
      "success": true,
      "status": 201
    });
  });
});