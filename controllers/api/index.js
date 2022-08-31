const router = require("express").Router();
const userRoutes = require("./userRoutes");
const campaignRoutes = require("./campaignRoutes");
const charRoutes = require("./charRoutes");

router.use("/users", userRoutes);
router.use("/campaigns", campaignRoutes);
router.use("/players", charRoutes);

module.exports = router;
