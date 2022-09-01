const { User } = require('../models');

const userData = [
  {
    id: 1,
    is_dm: true,
    username: "DM-Number-1",
    email: "DM1@email.com",
    password: "Password1234",
  },
  {
    id: 2,
    is_dm: true,
    username: "DM-Number-2",
    email: "DM2@email.com",
    password: "Password12345",
  },
  {
    id: 3,
    is_dm: false,
    username: "PLAYER-Number-1",
    email: "P1@email.com",
    password: "Password123456",
  },
  {
    id: 4,
    is_dm: false,
    username: "PLAYER-Number-2",
    email: "P2@email.com",
    password: "Password1234567",
  },
];

// userData.forEach(user => {
//     User.create(user);
    
// });
const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});


module.exports = seedUsers;