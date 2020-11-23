import {country}  from '../models'

export const getAllCountry = async (req, res, next) => {
    try {
        const result = await country.findAll({
            //optional filters
            where:      {},
            attributes: {
                exclude: ['id'],
            },
            raw:        true,
        })
        res.json({countries: result})
    } catch (error) {
        next(error)
    }
}