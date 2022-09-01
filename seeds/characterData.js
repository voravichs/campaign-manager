const { Character } = require('../models');

const characterData = [
  {
    name: 'Rob',
    class: "Cleric",
    race: "Human",
    player_id: 3,
    campaign_id: 3,
  },
  {
    name: 'Bob',
    class: "Fighter",
    race: "Half-elf",
    player_id: 4,
    campaign_id: 5,
  },
  {
    name: 'Toby',
    class: "Wizard",
    race: "Dragoborn",
    player_id: 3,
    campaign_id: null,
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;