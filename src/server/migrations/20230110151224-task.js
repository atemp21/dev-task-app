'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('tasks', {
      id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    start:{
        type: Sequelize.DATE,
        allowNull: false
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    completed:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    priority: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('tasks');
  }
};
