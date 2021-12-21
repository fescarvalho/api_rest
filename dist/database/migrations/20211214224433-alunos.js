"use strict"; module.exports = {
  up: async  (queryInterface, Sequelize) =>
     await  queryInterface.createTable('alunos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    idade: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    peso: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    altura: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    created_At: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_At: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => {
     await queryInterface.dropTable('alunos');
  },
};
