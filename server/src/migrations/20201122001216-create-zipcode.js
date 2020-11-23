'use strict'
module.exports = {
    up:   (queryInterface, Sequelize) => {
        return queryInterface.createTable('zipcode', {
            id: {
                type:          Sequelize.INTEGER,
                field:         'id',
                unique:        true,
                primaryKey:    true,
                autoIncrement: true,
            },

            code: {
                type:      Sequelize.STRING,
                unique:    true,
                allowNull: false,
            },

            countryId: {
                type:       Sequelize.INTEGER,
                allowNull:  false,
                references: {
                    model: 'country',
                    key:   'id',
                },
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('zipcode')
    },
}