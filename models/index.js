const User = require('./user');
const Character = require('./character')
const Campaign = require('./campaign')

Character.belongsTo(User, {
    foreignKey: 'player_id'
});

User.hasMany(Character, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE',
});

Campaign.belongsTo(User, {
    foreignKey: 'dm_id'
});

User.hasMany(Campaign, {
    foreignKey: 'dm_id',
    onDelete: 'CASCADE',
});

Character.belongsTo(Campaign, {
    foreignKey: 'campaign_id'
});

Campaign.hasMany(Character, {
    foreignKey: 'campaign_id',
    onDelete: 'CASCADE',
});


module.exports = {User, Campaign, Character};