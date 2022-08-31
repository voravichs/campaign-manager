const { Campaign } = require('../models');

const campaignData = [
  {
    name: 'Curse of Strahd',
    dm_id: 1,
    character_id: 3,
  },
  {
    name: 'Out of the Abyss',
    dm_id: 2,
    character_id: 3,
  },
  {
    name: 'Baldur’s Gate: Descent into Avernus',
    dm_id: 2,
    character_id:4,
  },
  {
    name: 'Storm King’s Thunder',
    dm_id: 2,
    character_id: 4,
  },
];

const seedCampaign = () => Campaign.bulkCreate(campaignData);

module.exports = seedCampaign;
