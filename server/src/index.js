import './bootstrap'
import express           from 'express'
import cors              from 'cors'
import morgan            from 'morgan'
import router            from './router/v1'
import bodyParser        from 'body-parser'
import * as error        from './middlewares/error'
import {port, logs, env} from './config/vars'
import path              from 'path'

const app = express()

// request logging. dev: console | production: file
app.use(morgan(logs))

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

/**
 * server status
 */
app.get('/', (req, res) => res.json({status: 'ok'}))

// load v1 router
app.use('/v1', router)

/**
 * Api docs - inorder to regenerate after api changes, please run `npm run docs` command
 **/
app.use('/docs', express.static(path.join(__dirname, '../docs')))

// if error is not an instanceOf APIError, convert it.
app.use(error.converter)

// catch 404 and forward to error handler
app.use(error.notFound)

// error handler, send stacktrace only during development
app.use(error.handler)

// start listening on env.PORT
app.listen(port, () => console.log(`The node.js app is listening on port ${port}.`))

