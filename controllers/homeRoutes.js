const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// Landing Page/Show all campaigns
router.get("/", async (req, res) => {
  try {
    // Get all campaigns and JOIN with user data
    const campaignData = await Campaign.findAll();

    // Serialize data so the template can read it
    const campaigns = campaignData.map((campaign) => campaign.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      campaigns,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Profile Page
router.get("/", async (req, res) => {
  res.render("profile");
});


router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
