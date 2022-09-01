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
    name: 'Tob',
    class: "Wizard",
    race: "Dragonborn",
    player_id: 3,
    campaign_id: 2,
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;