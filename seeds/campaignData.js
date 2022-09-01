const { Campaign } = require('../models');

const campaignData = [
  {
    name: 'Curse of Strahd',
    dm_id: 1,
  },
  {
    name: 'Out of the Abyss',
    dm_id: 1,
  },
  {
    name: 'Baldur\'s Gate: Descent into Avernus',
    dm_id: 2,
  },
  {
    name: 'Storm King\'s Thunder',
    dm_id: 2,
  },
  {
    name: 'Rime of the Frostmaiden',
    dm_id: 2,
  },
];

const seedCampaign = () => Campaign.bulkCreate(campaignData);

module.exports = seedCampaign;
