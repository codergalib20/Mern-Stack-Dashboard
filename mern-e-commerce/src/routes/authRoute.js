const express = require("express");
const {signin_user,load_users, signup_user} = require("../handlers/authHandle");
const authRoute = express.Router();
authRoute.get('/users', load_users);
authRoute.post("/signup", signup_user);
authRoute.post("/signin_user", signin_user);

module.exports = authRoute;