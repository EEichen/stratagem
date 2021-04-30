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
    return queryInterface.bulkInsert('Stratagems', [
      {
        title: 'test',
        text: 'this is a test stratagem',
        imageUrl: '',
        manualId: 1
      },
      {
        title: 'test2',
        text: 'this is a test stratagem',
        imageUrl: '',
        manualId: 2
      },
      {
        title: 'step 1',
        text: 'Ask yourself, what am I trying to accompish?',
        imageUrl: '',
        manualId: 3
      },
      {
        title: 'step 2',
        text: 'What do I need to accomplish the task?',
        imageUrl: '',
        manualId: 3
      },
      {
        title: 'step 3',
        text: 'Break down the problem into smaller pieces',
        imageUrl: '',
        manualId: 3
      },
      {
        title: 'step 4',
        text: 'Use the tools acquired to solve the problem',
        imageUrl: '',
        manualId: 3
      },
      {
        title: 'The right or left method',
        text: 'follow the right or left wall',
        imageUrl: '',
        manualId: 4
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
    return queryInterface.bulkDelete('Stratagems', null, {});
  }
};
