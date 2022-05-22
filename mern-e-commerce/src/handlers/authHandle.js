const User = require("../schema/authSchema");
// LOADED ALL USERS HERE
module.exports.load_users = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({
      result: user,
      message: "Users Loadded",
    });
  } catch (err) {
    res.status(403).json({
      error: err,
      message: "Users Loaded Faild",
    });
  }
};
// SIGN-UP A NEW USER or REGISTERD USER
module.exports.signup_user = async (req, res) => {
  const { email, password, name, profession, phone } = req.body;
  if ((!email, !password, !name, !phone)) {
    return res.status(400).json({
      message: "Please enter all fields",
    });
  }
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }
    const newUser = new User({
      name,
      email,
      password,
      phone,
      profession,
    });
    const saveUser = await newUser.save();
    if (saveUser) {
      res.status(201).json({
        message: "User Registered Successfully!",
        result: saveUser,
      });
    } else {
      res.status(500).json({
        message: "Failed to registered",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
module.exports.signin_user = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    console.log(email, password);
    const userLogging = await JobCreator.findOne({ email });

    if (userLogging) {
      res.status(200).json({ message: "User logged in successfully" });
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
