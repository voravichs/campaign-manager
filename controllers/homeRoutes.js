const router = require("express").Router();
const fetch = require('cross-fetch');
const { User, Campaign } = require("../models");
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
  let classes = [];
  let races = [];
  fetch("https://www.dnd5eapi.co/api/classes")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((result) => {
        classes.push(result);
      })
      return fetch("https://www.dnd5eapi.co/api/races")
        .then((response) => response.json())
        .then((data) => {
          data.results.forEach((result) => {
            races.push(result);
          })
          res.render("character-creation", {
            classlist: classes,
            racelist: races,
            logged_in: req.session.logged_in,
            is_dm: req.session.is_dm
          })
        });
    });
  });

  router.get("/campaigncreate", (req, res) => {
    res.render("campaign-creation", {
      logged_in: req.session.logged_in,
      is_dm: req.session.is_dm
    });
  });

  router.get("/campaigns/all", async (req, res) => {
    try {
      const campaignData = await Campaign.findAll(
        {
          include: User,
        }
      );
      const campaigns = campaignData.map((campaign) => campaign.get({ plain: true }));

      res.render("allcampaigns", {
        campaigns,
        logged_in: req.session.logged_in,
        is_dm: req.session.is_dm
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
