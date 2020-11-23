import express       from 'express'
import countryRouter from './country.route'
import placesRouter from './places.route'

const router = express.Router()

router.get('/status', (req,res)=> res.send('Server is up and running.'))

router.use('/country', countryRouter)

router.use('/places', placesRouter)

export default router