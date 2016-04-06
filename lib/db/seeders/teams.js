'use strict';
// sequelize db:seed:all
// sequelize db:seed --seed seeders/teams.js

// sequelize:db:seed:undo:all
// sequelize db:seed:undo --seed seeders/teams.js
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        'teams',
        [
            {
              'name': 'Team 1',
              'coach': 'Coach 1'
            },
            {
              'name': 'Team 2',
              'coach': 'Coach 2'
            },
            {
              'name': 'Team 3',
              'coach': 'Coach 3'
            },
            {
              'name': 'Team 4',
              'coach': 'Coach 4'
            },
            {
              'name': 'Team 5',
              'coach': 'Coach 5'
            },
            {
              'name': 'Team 6',
              'coach': 'Coach 6'
            },
            {
              'name': 'Team 7',
              'coach': 'Coach 7'
            },
            {
              'name': 'Team 8',
              'coach': 'Coach 8'
            },
            {
              'name': 'Team 9',
              'coach': 'Coach 9'
            },
            {
              'name': 'Team 10',
              'coach': 'Coach 10'
            },
            {
              'name': 'Team 11',
              'coach': 'Coach 11'
            },
            {
              'name': 'Team 12',
              'coach': 'Coach 12'
            },
            {
              'name': 'Team 13',
              'coach': 'Coach 13'
            },
            {
              'name': 'Team 14',
              'coach': 'Coach 14'
            },
            {
              'name': 'Team 15',
              'coach': 'Coach 15'
            },
        ],
        {
          schema: 'scorefa'
        }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teams', null, {});
  }
};
