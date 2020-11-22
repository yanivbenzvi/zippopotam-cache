'use strict'
module.exports = {
    up:   (queryInterface, Sequelize) => {
        return queryInterface.createTable('country', {
            id: {
                type:          Sequelize.INTEGER,
                field:         'id',
                unique:        true,
                primaryKey:    true,
                autoIncrement: true,
            },

            sName: {
                type:      Sequelize.STRING,
                unique:    true,
                allowNull: false,
            },

            fName: {
                type:      Sequelize.STRING,
                unique:    true,
                allowNull: false,
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('country')
    },
}