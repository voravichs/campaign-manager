const router = require("express").Router();
const { User, Campaign, Player, Character } = require("../../models");

//* Show DM profile with all the User's campaigns
router.get("/", async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ["password"] },
            include: Campaign,
        });
        const user = userData.get({ plain: true });
        
        res.render("profile", {
            user,
            logged_in: req.session.logged_in,
            is_dm: req.session.is_dm
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//* Get Campaign by id ()
router.get("/:id", async (req, res) => {
    try {
        const campaignData = await Campaign.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: { exclude: ["password"] },
                },
                {
                    model: Character,
                },
            ],
        });
        const campaign = campaignData.get({ plain: true });
        console.log(campaign);

        res.render("campaign", {
            ...campaign,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
