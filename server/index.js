import {port, env} from './config/vars'
import express from 'express'
import router  from './router/v1'
import './bootstrap'

const app = express()
const cors = require('cors')

app.use(cors())

app.get('/',(req,res)=> res.send('ok'))

app.use('/v1', router)

app.listen(port, () => console.log(`The node.js app is listening on port ${port}.`))

