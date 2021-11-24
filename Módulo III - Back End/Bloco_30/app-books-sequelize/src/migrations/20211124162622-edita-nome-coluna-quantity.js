'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Books', 'pageQuantity', 'page_quantity');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Books', 'page_quantity', 'pageQuantity');
  }
};
