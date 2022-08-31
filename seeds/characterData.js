const { Character } = require('../models');

const characterData = [
  {
    name: 'Rob',
    class: "Cleric",
    race: "human",
    player_id: 3,
  },
  {
    name: 'Bob',
    class: "fighter",
    race: "elf",
    player_id: 4,
  },
  {
    name: 'tob',
    class: "wizard",
    race: "elf",
    player_id: 2,
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;