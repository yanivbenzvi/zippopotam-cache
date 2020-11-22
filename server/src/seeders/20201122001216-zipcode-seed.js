'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'zipcode',
            [
                {
                    id:        1,
                    code:      '90210',
                    countryId: 1,
                },
            ],
            {},
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('zipcode', null, {})
    },
}
