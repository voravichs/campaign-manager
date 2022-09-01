const router = require("express").Router();
const { Campaign } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/', async (req, res) => {
  try {
    const campaignData = await Campaign.findAll();
    const campaigns = campaignData.map((campaign) => campaign.get({plain: true}));
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.post("/", withAuth, async (req, res) => {
  try {
    const newCampaign = await Campaign.create({
      ...req.body,
      dm_id: req.session.user_id,
    });

    res.status(200).json(newCampaign);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const updatedCampaign = await Campaign.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(updatedCampaign);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const campaignData = await Campaign.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!campaignData) {
      res.status(404).json({ message: "No campaign found with this id!" });
      return;
    }

    res.status(200).json(campaignData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
