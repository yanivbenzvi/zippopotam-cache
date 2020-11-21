import express   from 'express'
import testRoute from './test.route'
const router = express.Router()

/**
 * @api {get} /status check the server is running
 * @apiName status
 */
router.get('/status', (req,res)=> res.send('Server is up and running.'))

router.use('/test', testRoute)

export default router