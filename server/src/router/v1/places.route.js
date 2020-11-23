import express         from 'express'
import validate        from 'express-validation'
import * as controller from '../../controllers/places.controller'
import {listPlaces}    from '../../validations/places.validation'

const router = express.Router()

router
    /**
     * @api {get} v1/places List places
     * @apiDescription Get a list of Places around zipcode
     * @apiVersion 1.0.0
     * @apiName ListPlaces
     * @apiGroup Places
     * @apiPermission public
     *
     * @apiSuccess {Object[]} Country List of countries.
     */
    .route('/')
    /**
     *
     */
    .get(validate(listPlaces), controller.getPlaces)


export default router

