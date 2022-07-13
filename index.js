require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const formidableMiddleWare = require("express-formidable");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");
const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(formidable());
app.use(formidableMiddleWare());
const cors = require("cors");
app.use(cors());

/////////////////////////////////////////////

// Import des routes
const userscompanyRoutes = require("./routes/userscompany");
app.use(userscompanyRoutes);
const usersliberalRoutes = require("./routes/usersliberal");
app.use(usersliberalRoutes);

//serveur

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
