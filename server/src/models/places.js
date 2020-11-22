'use strict'

module.exports = (sequelize, DataTypes) => {
    let Places = sequelize.define('places', {
        placeName: {
            type:       DataTypes.STRING,
            primaryKey: true,
            allowNull:  false,
        },

        longitude: {
            type: DataTypes.STRING,
        },

        latitude: {
            type: DataTypes.STRING,
        },
    }, {freezeTableName: true, timestamps: false})

    Places.associate = function (models) {
        // associations can be defined here
    }

    return Places
}