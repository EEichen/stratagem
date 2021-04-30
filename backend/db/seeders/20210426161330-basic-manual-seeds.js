'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Manuals', [
      {//1
        title: 'test manual',
        userId: 1
      },
      {//2
        title: 'test manual 2',
        userId: 1
      },
      {//3
        title: 'Problem solving methods',
        userId: 1
      },
      {//4
        title: 'maze',
        userId: 1
      },
      {//5
        title: 'going to mars',
        userId: 1
      },
      {//6
        title: 'algo solving',
        userId: 1
      },
      {//7
        title: 'general stratagems',
        userId: 1
      },
      {//8
        title: 'generic strategy games stratagems',
        userId: 1
      },
      {//9
        title: 'how I made some decent tasting fish',
        userId: 1
      },
      {//10
        title: 'other Problem solving methods',
        userId: 1
      },
      {//11
        title: 'maze 2',
        userId: 1
      },
      {//12
        title: 'Living on Pluto',
        userId: 1
      },
      {//13
        title: 'leetcode #14 longest common prefix',
        userId: 1
      },
      {//14
        title: 'empty',
        userId: 1
      },
      {//15
        title: 'search for me',
        userId: 1
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Manuals', null, {});
  }
};
