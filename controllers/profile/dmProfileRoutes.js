const router = require("express").Router();
const { User, Campaign, Character } = require("../../models");
const withAuth = require("../../utils/auth");

//* Show DM profile with all the User's campaigns
router.get("/", withAuth, async (req, res) => {
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

//* Get Campaign by id
//* /profile/dm/:id
router.get("/:id", withAuth, async (req, res) => {
    try {
        const campaignData = await Campaign.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: { exclude: ["password"] },
                },
                {
                    model: Character
                },
            ],
        });
        const campaign = campaignData.get({ plain: true });

        let userData;
        if (!req.session.is_dm) {
            userData = await User.findByPk(req.session.user_id, {
                attributes: { exclude: ["password"] },
                include: 
                {
                    model: Character
                }
            });
            const user = userData.get({ plain: true });
            res.render("campaign", {
                ...campaign,
                usercharacters: user.characters,
                logged_in: req.session.logged_in,
                is_dm: req.session.is_dm
            });
        } else {
            res.render("campaign", {
                ...campaign,
                logged_in: req.session.logged_in,
                is_dm: req.session.is_dm
            });
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
