import Axios from 'axios'

class ErrorArgsNotValid extends Error {
    constructor(e) {super(e)}
}

export class ZippopotamApi {
    static serviceUrl = 'http://api.zippopotam.us'

    /**
     * Retrieve list of places around zip code.
     * @param {String} country
     * @param {String} zipCode
     * @example
     * //should return places around ZipCode 90210 in country US
     * ZippopotamApi.SearchPost('US', '90210')
     * @returns {Array<Object>} list of places around the given zipCode
     * @throws Error
     */
    static async requestLocation(country, zipCode) {
        if (!ZippopotamApi.isCountryValid(country)) {
            throw new Error('Country is not valid')
        }

        if (!ZippopotamApi.isZipCodeValid(zipCode)) {
            throw new Error('Country is not valid')
        }

        try {
            return await Axios.get(`${ZippopotamApi.serviceUrl}/${country}/${zipCode}`)
        } catch (error) {
            if(error.request.res.statusCode !== 404) {
                throw error
            }
        }
    }

    /**
     * Retrieve true if string is capitalized.
     * @param {String} letters
     * @returns {Boolean}
     */
    static hasNumber(letters) {
        return /\d/.test(letters)
    }

    /**
     * Retrieve true if string is capitalized.
     * @param {String} letters
     * @returns {Boolean}
     */
    static isCountryCapitalized(letters) {
        return !/[a-z]/.test(letters) && /[A-Z]/.test(letters)
    }

    /**
     * Check if country length is 2 and is capitalized.
     * @param country
     * @returns {Boolean}
     */
    static isCountryValid(country) {
        return country.length === 2 && ZippopotamApi.isCountryCapitalized(country) && !ZippopotamApi.hasNumber(country)
    }

    /**
     * Check if zipCode length is 2 and is capitalized.
     * @param zipCode
     * @returns {Boolean}
     */
    static isZipCodeValid(zipCode) {
        return zipCode !== null && zipCode.length > 0
    }
}