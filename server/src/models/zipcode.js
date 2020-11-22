'use strict'

module.exports = (sequelize, DataTypes) => {
    let Zipcode = sequelize.define('zipcode', {
        code: {
            type:       DataTypes.STRING,
            primaryKey: true,
            allowNull:  false,
        },

    }, {freezeTableName: true, timestamps: false})

    Zipcode.associate = function (models) {
        // associations can be defined here
    }

    return Zipcode
}