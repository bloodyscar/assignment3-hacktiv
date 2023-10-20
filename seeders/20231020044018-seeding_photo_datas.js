'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Photos', [{
      title: 'Foto Jadul',
      caption: 'Caption foto jadul',
      image_url: "https://photojadul.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto Kenangan',
      caption: 'Caption foto kenagan',
      image_url: "https://kenaganfoto.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto Selfie',
      caption: 'Caption foto selfie',
      image_url: "https://selfie.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Foto Baru',
      caption: 'Caption foto bnaru',
      image_url: "https://photbaru.com",
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
