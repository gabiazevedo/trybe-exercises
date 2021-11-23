'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', 
  [
    {
      fullName: 'Leonardo',
      email: 'leo@test.com',
      createAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updateAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      fullName: 'JEduardo',
      email: 'edu@test.com',
      createAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updateAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),
    
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
