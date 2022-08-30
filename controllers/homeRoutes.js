const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// Landing Page
router.get("/", async (req, res) => {
    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
