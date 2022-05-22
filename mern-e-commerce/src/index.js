const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const offerpriceRoute = require("./routes/offerpriceRoute");
const productRoute = require("./routes/productRoute");
const authRoute = require("./routes/authRoute");
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();

// HERE ARE ALL MIDDLEWARE
app.use(express.json());
dotenv.config();
app.use(cors());
let uri = process.env.SERVER_URL;
const dirPath = path.join(__dirname, "../public");
app.use(express.static(dirPath));
// CONNECT WITH SERVER
main().catch((err) => console.log(err));
async function main() {
  await mongoose
    .connect(uri)
    .then(() => console.log("Server Connection Successfully!"))
    .catch((err) => console.log(err));

  // HERE CALL ALL ROUTES
  app.get("/", async (req, res) => res.send("Welcome to gbs soft"));
  app.use("/api/offerproducts", offerpriceRoute);
  app.use("/api/products", productRoute);
  app.use("/api/users", authRoute);
}

app.listen(port, () => {
  console.log(`Server running successfully port no is : ${port}`);
});
