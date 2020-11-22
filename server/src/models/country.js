'use strict'

module.exports = (sequelize, DataTypes) => {
    let Country       = sequelize.define('country', {
        sName: {
            type:       DataTypes.STRING,
            allowNull:  false,
            primaryKey: true,
        },

        fName: {
            type:      DataTypes.STRING,
            allowNull: false,
        },
    }, {freezeTableName: true, timestamps: false})
    Country.associate = function (models) {
    }
    return Country
}