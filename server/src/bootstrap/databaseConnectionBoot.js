import {databaseConfig} from '../config/vars'
import Sequelize        from 'sequelize'

(async ()=> await connectToDatabase())()

async function connectToDatabase() {
    const sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
        host:             databaseConfig.host,
        dialect:          databaseConfig.dialect,
        operatorsAliases: false,
        pool:             {
            max:     5,
            min:     0,
            acquire: 30000,
            idle:    10000,
        },
    })
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (err) {
        console.log('Unable to connect to the database:', err)
    }
}


