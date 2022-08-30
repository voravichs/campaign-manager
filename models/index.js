const User = require('./user');
const Character = require('./character')
const Campaign = require('./campaign')

Character.belongsto(User, {
    foreignKey: 'player_id'
});

User.hasMany(Character, {
    foreignKey: 'player_id',
    onDelete: 'CASCADE',
});

Campaign.belongsto(User, {
    foreignKey: 'dm_id'
});

User.hasMany(Campaign, {
    foreignKey: 'dm_id',
    onDelete: 'CASCADE',
});

Character.belongsto(Campaign, {
    foreignKey: 'character_id'
});

Campaign.hasMany(Character, {
    foreignKey: 'character_id',
    onDelete: 'CASCADE',
});
