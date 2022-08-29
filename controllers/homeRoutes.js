const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
