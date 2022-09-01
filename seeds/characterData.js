const { Character } = require('../models');

const characterData = [
  {
    name: 'Rob',
    charclass: "Cleric",
    race: "Human",
    player_id: 3,
    campaign_id: 3,
  },
  {
    name: 'Bob',
    charclass: "Fighter",
    race: "Half-elf",
    player_id: 4,
    campaign_id: 5,
  },
  {
    name: 'Tob',
    charclass: "Wizard",
    race: "Dragonborn",
    player_id: 3,
    campaign_id: null,
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;