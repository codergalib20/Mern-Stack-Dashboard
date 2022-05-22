const express = require("express");
const {
  get_product,
  post_product,
  delete_product,
  update_product,
} = require("../handlers/offerpriceHandler");
const offerpriceRoute = express.Router();
offerpriceRoute.get("/load", get_product);
offerpriceRoute.post("/post", post_product);
offerpriceRoute.delete("/delete/:id", delete_product);
offerpriceRoute.patch("/update/:id", update_product);
module.exports = offerpriceRoute;
