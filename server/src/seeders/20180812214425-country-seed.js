'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'country',
            [
                {
                    id:    1,
                    fName: 'United States',
                    sName: 'US',
                },
                {
                    id:    2,
                    fName: 'Turkey',
                    sName: 'TR',
                },
                {
                    id:    3,
                    fName: 'Thailand',
                    sName: 'TH',
                },
                {
                    id:    4,
                    fName: 'san Marino',
                    sName: 'SM',
                },
                {
                    id:    5,
                    fName: 'South Africa',
                    sName: 'ZA',
                },
                {
                    id:    6,
                    fName: 'Virgin Islands',
                    sName: 'VI',
                },
                {
                    id:    7,
                    fName: 'Vatican',
                    sName: 'VA',
                },
                {
                    id:    8,
                    fName: 'Norway',
                    sName: 'NO',
                },
                {
                    id:    9,
                    fName: 'Croatia',
                    sName: 'HR',
                },
                {
                    id:    10,
                    fName: 'Liechtenstein',
                    sName: 'LI',
                },
            ],
            {},
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('country', null, {})
    },
}
