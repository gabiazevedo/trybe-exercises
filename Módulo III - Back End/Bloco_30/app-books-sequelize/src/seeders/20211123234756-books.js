'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
  [
    {
      title: 'Harry Potter e o Enigma do Príncipe',
      author: 'J. K. Rolling',
      pageQuantity: 607,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Código Limpo',
      author: 'Robert Martin',
      pageQuantity: 456,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {}),
};
