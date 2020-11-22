import express         from 'express'
import * as controller from '../../controllers/country.controller'

const router = express.Router()

router
    /**
     * @api {get} v1/country List country
     * @apiDescription Get a list of country
     * @apiVersion 1.0.0
     * @apiName ListCountry
     * @apiGroup Country
     * @apiPermission public
     *
     * @apiSuccess {Object[]} Country List of countries.
     */
    .route('/')
    /**
     *
     */
    .get(controller.getAllCountry)


export default router

