const router = require("express").Router();
const { User } = require("../../models");


router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({plain: true}));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

//* Signup New User
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.is_dm = userData.is_dm;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//* Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.is_dm = userData.is_dm;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//* Logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
