'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const date = new Date()
     await queryInterface.bulkInsert('Tags', [
      {
        id: 1,
        type: 1,
        name_zh_cn: '中投',
        name_en: 'Mig-Range Shots',
        createdAt: date,
        updatedAt: date,
      },
      {
       id: 2,
       type: 2,
       name_zh_cn: '三分',
       name_en: 'Three Points Shots',
       createdAt: date,
       updatedAt: date,
     },
     {
       id: 3,
       type: 3,
       name_zh_cn: '罚球',
       name_en: 'Free Throw Shots',
       createdAt: date,
       updatedAt: date,
     },
     {
       id: 4,
       type: 4,
       name_zh_cn: '自由投篮',
       name_en: 'Mixed Shots',
       createdAt: date,
       updatedAt: date,
     },
    ])
    await queryInterface.bulkInsert('Users', [
     {
       id: 1,
       username: 'Dipper',
       password: '1f77692534b3d6824030509e8923a991',
       createdAt: date,
       updatedAt: date,
     },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Tags', null, {});
     await queryInterface.bulkDelete('Users', null, {});
  }
};
