'use strict'
module.exports = {
    up:   (queryInterface, Sequelize) => {
        return queryInterface.createTable('places', {
            id: {
                type:          Sequelize.INTEGER,
                field:         'id',
                unique:        true,
                primaryKey:    true,
                autoIncrement: true,
            },

            placeName: {
                type:      Sequelize.STRING,
                allowNull: false,
            },

            zipcodeId: {
                type:       Sequelize.INTEGER,
                allowNull:  false,
                references: {
                    model: 'zipcode',
                    key:   'id',
                },
            },

            countryId: {
                type:       Sequelize.INTEGER,
                allowNull:  false,
                references: {
                    model: 'country',
                    key:   'id',
                },
            },

            longitude: {
                type: Sequelize.STRING,
            },

            latitude: {
                type: Sequelize.STRING,
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('places')
    },
}