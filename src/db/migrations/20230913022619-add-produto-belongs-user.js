'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Produtos', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Usuarios',
        key: 'id'
      },
      onDelete: 'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Produtos', 'userId')
  }
};
