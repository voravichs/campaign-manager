const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// Landing Page/Show all campaigns
router.get("/", async (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
    is_dm: req.session.is_dm
  })
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/charcreate", (req, res) => {
  res.render("character-creation");
});

router.get("/campaigncreate", (req, res) => {
  res.render("campaign-creation");
});

module.exports = router;
