const express = require("express");
const {
  get_product,
  post_product,
  delete_product,
  update_product,
} = require("../handlers/productHandler");
const productRoute = express.Router();
productRoute.get("/load", get_product);
productRoute.post("/post", post_product);
productRoute.delete("/delete/:id", delete_product);
productRoute.patch("/update/:id", update_product);
module.exports = productRoute;
