const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog_site:536asSJOx4uIoxLT@cluster0.h6iznsu.mongodb.net/"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json({ userDoc });
  } catch (e) {
    res.status(400).json(e);
  }
});

app.listen(4000);

//536asSJOx4uIoxLT
//blog_site
// mongodb+srv://blog_site:536asSJOx4uIoxLT@cluster0.h6iznsu.mongodb.net/
