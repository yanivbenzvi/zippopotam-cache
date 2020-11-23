'use strict'

const timestamp = new Date()

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'places',
            [
                {
                    id:        1,
                    placeName: 'Beverly Hills',
                    longitude: '-118.4065',
                    latitude:  '34.0901',
                    zipcodeId: 1,
                    countryId: 1,
                },
            ],
            {},
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('places', null, {})
    },
}
