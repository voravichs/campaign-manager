const seedCampaign = require('./campaignData');
const seedCharacters = require('./characterData');
const seedUsers = require('./userData')

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCampaign();
    console.log('\n----- CATEGORIES SEEDED -----\n');
  
    await seedCharacters();
    console.log('\n----- PRODUCTS SEEDED -----\n');
  
    await seedUsers();
    console.log('\n----- TAGS SEEDED -----\n');
  
    process.exit(0);
  };

  seedAll();