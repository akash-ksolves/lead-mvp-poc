'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'email', Sequelize.STRING)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'email')
  }
};
