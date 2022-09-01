const router = require("express").Router();
const { User, Character, Campaign } = require("../../models");

//* Show Player profile with all User's characters
router.get("/", async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ["password"] },
            include: Character,
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

//* Get Character by id
router.get("/:id", async (req, res) => {
    try {
        const characterData = await Character.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: { exclude: ["password"] },
                },
                {
                    model: Campaign,
                },
            ],
        });
        const character = characterData.get({ plain: true });
        console.log(character);

        res.render("character", {
            ...character,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
