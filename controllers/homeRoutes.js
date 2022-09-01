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
  res.render("character-creation", {
    logged_in: req.session.logged_in
  });
});

router.get("/campaigncreate", (req, res) => {
  res.render("campaign-creation", {
    logged_in: req.session.logged_in
  });
});

router.get("/campaigns/all", async (req, res) => {
  // try {
  //   const userData = await User.findByPk(req.session.user_id, {
  //     attributes: { exclude: ["password"] },
  //     include: Campaign,
  //   });
  //   const user = userData.get({ plain: true });

  //   res.render("profile", {
  //     user,
  //     logged_in: req.session.logged_in,
  //     is_dm: req.session.is_dm
  //   });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  res.render("allcampaigns", {
    logged_in: req.session.logged_in
  });
});

module.exports = router;
