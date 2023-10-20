'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [{
      title: 'Foto Jadul ID 1',
      caption: 'Caption foto jadul',
      image_url: "https://photojadul.com",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto Kenangan ID 1',
      caption: 'Caption foto kenagan',
      image_url: "https://kenaganfoto.com",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto Selfie ID 1',
      caption: 'Caption foto selfie',
      image_url: "https://selfie.com",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto Baru ID 1',
      caption: 'Caption foto bnaru',
      image_url: "https://photbaru.com",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
