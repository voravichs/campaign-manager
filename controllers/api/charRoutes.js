const router = require("express").Router();
const { Character } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/', async (req, res) => {
  try {
    const characterData = await Character.findAll();
    const characters = characterData.map((character) => character.get({plain: true}));
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json(error);
    
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newCharacter = await Character.create({
      ...req.body,
      player_id: req.session.user_id,
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedCharacter = await Character.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    
    if (!updatedCharacter) {
      res.status(404).json({ message: "No character found with this id!" });
      return;
    }

    res.status(200).json(updatedCharacter);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!characterData) {
      res.status(404).json({ message: "No character found with this id!" });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
