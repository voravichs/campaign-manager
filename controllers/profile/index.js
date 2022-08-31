const router = require("express").Router();
const dmRoutes = require("./dmProfileRoutes");
const playerRoutes = require("./playerProfileRoutes");

router.use("/dm", dmRoutes);
router.use("/player", playerRoutes);

module.exports = router;
