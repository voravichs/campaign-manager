const User = require('./User');
const Character = require('./Character')
const Campaign = require('./Campaign')

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
    foreignKey: 'character_id'
});

Campaign.hasMany(Character, {
    foreignKey: 'character_id',
    onDelete: 'CASCADE',
});
