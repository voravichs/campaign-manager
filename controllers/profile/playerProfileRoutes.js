const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

//* Show Player profile with all User's characters
router.get("/", async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ["password"] },
            include: [{ model: Character }],
        });

        const user = userData.get({ plain: true });

        res.render("profile", {
            user,
            logged_in: true,
            is_dm: false //req.session.is_dm
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//* Get Character by id
router.get("/:id", async (req, res) => {
    try {
        const characterData = await Character.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                },
            ],
        });
        const character = characterData.get({ plain: true });

        res.render("character", {
            ...character,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
