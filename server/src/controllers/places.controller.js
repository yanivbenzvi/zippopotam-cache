import httpStatus      from 'http-status'
import {sequelize}     from '../models'
import APIError        from '../utils/APIError'
import {ZippopotamApi} from '../utils/zippopotamApi'

export const getPlaces = async (req, res, next) => {
    try {
        const query_countryName = req.query['countryName']
        const query_zipcode     = req.query['zipcode']

        const query = 'select p.placeName,p.latitude,p.longitude ' +
            'from places as p ' +
            'left join zipcode as z on p.zipcodeId = z.id ' +
            'left join country as c on p.countryId = c.id and c.id = z.countryId ' +
            `where z.code='${query_zipcode}' and c.sName='${query_countryName}';`
        let result  = await sequelize.query(query, {type: sequelize.QueryTypes.SELECT})

        if (result.length === 0) {
            try {
                const response = await getApiResult(query_countryName, query_zipcode)
                await cacheApiResult(response)
                result = await sequelize.query(query, {type: sequelize.QueryTypes.SELECT})
            } catch (error) {
                next(new APIError({
                    message: error.toString(),
                    status:  httpStatus.VALIDATION_ERR,
                }))
            }
        }

        res.json({places: result})
    } catch (error) {
        next(error)
    }
}

const getApiResult = async (country, zipCode) => {
    try {
        const response = await ZippopotamApi.requestLocation(country, zipCode)
        return response?.data
    } catch (error) {
        console.error(error)
    }
}

const cacheApiResult = async (response) => {
    if(!response)
        return

    try {
        const countrySName = response['country abbreviation']
        const zipcode      = response['post code']
        const places       = response['places']


        const selectCountryIdQuery = `select id from country where sName='${countrySName}'`
        const selectCountryResult  = await sequelize.query(selectCountryIdQuery, {type: sequelize.QueryTypes.SELECT})
        const countryId            = selectCountryResult[0].id

        const insertZipcodeQuery = `insert into zipcode (code, countryId) values (${zipcode}, ${countryId});`
        const insertZipcodeResult = await sequelize.query(insertZipcodeQuery, {type: sequelize.QueryTypes.INSERT})
        const zipcodeId          = insertZipcodeResult[0]

        const insertPlaces = (place) => {
            console.log(place)
            const placeName         = place['place name']
            const longitude         = place['longitude']
            const latitude          = place['latitude']
            const insertPlacesQuery = `insert into places (placeName, zipcodeId, countryId, longitude, latitude)` +
                ` values ('${placeName}', ${zipcodeId},${countryId},'${longitude}','${latitude}');`
            try {
                return sequelize.query(insertPlacesQuery, {type: sequelize.QueryTypes.INSERT})
            }catch (error){
                console.error(error)
            }
        }

        let insertPlacesPromises = []
        if (Array.isArray(places) && places.length > 0) {
            places.forEach(place => insertPlacesPromises.push(insertPlaces(place)))
        } else {
            insertPlacesPromises.push(insertPlaces(places))
        }

        await Promise.all(insertPlacesPromises)
    } catch (error) {
        throw error
    }
}