import './bootstrap'
import express     from 'express'
import morgan      from 'morgan'
import router      from './router/v1'
import * as error  from './middlewares/error'
import {port, env} from './config/vars'
import {logs}      from './config/vars'

const app  = express()
const cors = require('cors')

// request logging. dev: console | production: file
app.use(morgan(logs))

app.use(cors())

// if error is not an instanceOf APIError, convert it.
app.use(error.converter)

// catch 404 and forward to error handler
app.use(error.notFound)

// error handler, send stacktrace only during development
app.use(error.handler)

app.get('/', (req, res) => res.send('ok'))

app.use('/v1', router)

// start listening on env.PORT
app.listen(port, () => console.log(`The node.js app is listening on port ${port}.`))

