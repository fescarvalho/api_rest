"use strict";const bcryptjs = require('bcryptjs')

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Luiz1',
          email: 'luiz1@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'Luiz2',
          email: 'luiz2@gmail.com',
          password_hash: await bcryptjs.hash('789012', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'Luiz3',
          email: 'luiz3@gmail.com',
          password_hash: await bcryptjs.hash('345678', 8),
          created_at: new Date(),
          updated_at: new Date(),

        }
      ],
        {},

  ),

  down: () => {},
};
