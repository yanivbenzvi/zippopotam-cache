import chai            from 'chai'
import chaiAsPromised  from 'chai-as-promised'
import {ZippopotamApi} from '../../src/utils/zippopotamApi'

chai.use(chaiAsPromised)
const expect = chai.expect

describe('[unit] ZippopotamApi', () => {

    describe('#requestLocation', () => {
        it('should retrieve some value for valid request', async () => {
            const stub = await ZippopotamApi.requestLocation('US', '90210')
            expect(stub).to.be.a('Object')
        })

        it('should throw error if some of the parameter is missing or not valid', async () => {
            await expect(ZippopotamApi.requestLocation('', '')).to.eventually.be.rejectedWith(Error)
        })
    })

    describe('#isCountryValid', () => {
        it('should Retrieve false for empty country', () => {
            expect(ZippopotamApi.isCountryValid('')).to.be.equal(false)
        })

        it('should Retrieve false for lowercase letter', () => {
            expect(ZippopotamApi.isCountryValid('us')).to.be.equal(false)
        })

        it('should Retrieve false for word that is length is not equal to 2', () => {
            expect(ZippopotamApi.isCountryValid('usss')).to.be.equal(false)
            expect(ZippopotamApi.isCountryValid('u')).to.be.equal(false)
            expect(ZippopotamApi.isCountryValid('')).to.be.equal(false)
        })

        it('should Retrieve false if word contain number or non letter char', () => {
            expect(ZippopotamApi.isCountryValid('U2')).to.be.equal(false)
            expect(ZippopotamApi.isCountryValid('3')).to.be.equal(false)
            expect(ZippopotamApi.isCountryValid('12')).to.be.equal(false)
        })

        it('should Retrieve true for capitalized letter with length equal 2', () => {
            expect(ZippopotamApi.isCountryValid('US')).to.be.equal(true)
            expect(ZippopotamApi.isCountryValid('IS')).to.be.equal(true)
            expect(ZippopotamApi.isCountryValid('ID')).to.be.equal(true)
        })
    })

    describe('#isZipCodeValid', () => {
        it('should Retrieve false for empty zipcode', () => {
            expect(ZippopotamApi.isZipCodeValid('')).to.be.equal(false)
        })

        it('should Retrieve false for empty zipcode', () => {
            expect(ZippopotamApi.isZipCodeValid('')).to.be.equal(false)
        })

        it('should Retrieve false for empty zipcode', () => {
            expect(ZippopotamApi.isZipCodeValid('90210')).to.be.equal(true)
        })
    })

    describe('#isCountryCapitalized', () => {
        it('should Retrieve false for non capitalized letters', () => {
            expect(ZippopotamApi.isCountryCapitalized('aa')).to.be.equal(false)
            expect(ZippopotamApi.isCountryCapitalized('bBb')).to.be.equal(false)
            expect(ZippopotamApi.isCountryCapitalized('z')).to.be.equal(false)
        })

        it('should Retrieve true for capitalized letters', () => {
            expect(ZippopotamApi.isCountryCapitalized('US')).to.be.equal(true)
            expect(ZippopotamApi.isCountryCapitalized('IS')).to.be.equal(true)
            expect(ZippopotamApi.isCountryCapitalized('BLA')).to.be.equal(true)
        })
    })
})
