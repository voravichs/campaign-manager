const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// Landing Page/Show all campaigns
router.get("/", async (req, res) => {
//try {
//  // Get all campaigns and JOIN with user data
//  const campaignData = await Campaign.findAll();
//
//  // Serialize data so the template can read it
//  const campaigns = campaignData.map((campaign) => campaign.get({ plain: true }));
//
//  // Pass serialized data and session flag into template
//  res.render("homepage", {
//    campaigns,
//    logged_in: req.session.logged_in
//  });
//} catch (err) {
//  res.status(500).json(err);
//}
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
