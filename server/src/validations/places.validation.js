const Joi  = require('joi')

module.exports = {

    // GET /v1/places
    listPlaces: {
        query: {
            zipcode:     Joi.string().min(4).max(8).required(),
            countryName: Joi.string().max(2).required(),
        },
    },
}
