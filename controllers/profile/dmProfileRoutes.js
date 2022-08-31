const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
    res.render("profile", {
        is_dm: true //req.session.is_dm
    });
});

module.exports = router;
