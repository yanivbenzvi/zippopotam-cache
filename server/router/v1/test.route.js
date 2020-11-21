import express             from 'express'
import validate            from 'express-validation'
import * as testController from '../../controllers/test.controller'
// import {authorize, ADMIN, LOGGED_USER}                  from '../../middlewares/auth'
// import {listUsers, createUser, replaceUser, updateUser} from '../../validations/user.validation'

const router = express.Router()

router
    .route('/')
    .get(testController.test)


export default router

