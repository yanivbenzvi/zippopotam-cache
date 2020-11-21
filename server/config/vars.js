import path from 'path'
import env  from 'dotenv-safe'

// import .env variables
env.load({
    path:   path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example'),
})
console.log('NODE_ENV:  ', process.env.NODE_ENV)
module.exports = {
    env:            process.env.NODE_ENV,
    port:           process.env.PORT,
    databaseConfig: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host:     process.env.DB_HOST,
        dialect:  process.env.DB_DIALCT,
    },
    logs:           process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
}
