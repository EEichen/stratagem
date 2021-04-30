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
        imageUrl: 'https://github.com/EEichen/stratagem/blob/main/backend/images/20%20by%2020%20orthogonal%20maze.png?raw=true',
        manualId: 4
      },
      {
        title: 'Launch',
        text: 'Take off',
        imageUrl: 'https://www.qrg.northwestern.edu/projects/vss/docs/media/Navigation/shuttle6.gif',
        manualId: 5
      },
      {
        title: 'Wait',
        text: 'Travel a long distance over a long time',
        imageUrl: '',
        manualId: 5
      },
      {
        title: 'Land',
        text: 'Finally arrive on mars',
        imageUrl: 'https://specials-images.forbesimg.com/imageserve/5f53fbab099efa47007b0912/960x0.jpg?fit=scale',
        manualId: 5
      },
      {
        title: 'strat 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 2',
        text: 'Sit amet facilisis magna etiam tempor orci. Orci eu lobortis elementum nibh tellus molestie.',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 3',
        text: 'Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit.',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 4',
        text: 'Egestas sed sed risus pretium quam vulputate.',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 5',
        text: 'Sit amet volutpat consequat mauris.',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 6',
        text: 'Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero.',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 7',
        text: 'Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 8',
        text: 'Sagittis purus sit amet volutpat consequat mauris nunc congue nisi.',
        imageUrl: '',
        manualId: 6
      }, {
        title: 'strat 9',
        text: 'Amet consectetur adipiscing elit pellentesque habitant morbi.',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 10',
        text: 'Dui id ornare arcu odio ut. Elementum integer enim neque volutpat ac tincidunt vitae.',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 11',
        text: 'Eu mi bibendum neque egestas congue. Gravida cum sociis natoque penatibus et. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum.',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 12',
        text: 'Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.',
        imageUrl: '',
        manualId: 6
      }, {
        title: 'strat 13',
        text: 'The fourth newest stratagem in this Manual',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 14',
        text: 'The third newest stratagem in this Manual',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 15',
        text: 'The second newest stratagem in this Manual',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'strat 16',
        text: 'The newest stratagem in this Manual',
        imageUrl: '',
        manualId: 6
      },
      {
        title: 'Starting out',
        text: 'Focus on building economy and defense',
        imageUrl: '',
        manualId: 7
      },
      {
        title: 'The next step',
        text: 'Find allies and look for a path to expand',
        imageUrl: '',
        manualId: 7
      },
      {
        title: 'Finally',
        text: 'Conquer!',
        imageUrl: '',
        manualId: 7
      },
      {
        title: 'step 1',
        text: 'Thaw out some tilapia fillets',
        imageUrl: '',
        manualId: 8
      },
      {
        title: 'step 2',
        text: 'Soak in butter',
        imageUrl: '',
        manualId: 8
      },
      {
        title: 'step 3',
        text: 'Season with salt, pepper, Italian seasoning, and parmesan',
        imageUrl: '',
        manualId: 8
      },
      {
        title: 'step 4',
        text: 'Cook in air fryer for 10-12min at 400 degrees',
        imageUrl: '',
        manualId: 8
      },
      {
        title: 'Untitled',
        text: 'Place problem solving strategy here.',
        imageUrl: '',
        manualId: 9
      },
      {
        title: 'Glance and see the solution',
        text: 'Instantly see the path by glancing at it',
        imageUrl: 'https://github.com/EEichen/stratagem/blob/main/backend/images/50%20by%2050%20orthogonal%20maze.png?raw=true',
        manualId: 10
      },
      {
        title: 'Live on Pluto',
        text: 'Freeze to death',
        imageUrl: '',
        manualId: 11
      },
      {
        title: 'search for this Stratagem',
        text: 'Type in the search area',
        imageUrl: '',
        manualId: 14
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
