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

        // //Check if database was seeded already, and do it if needed
        // User.findById(1).then(user => {
        //     if (!user) {
        //         console.log('Database is not seeded, will run seeds now...')
        //         const {exec} = require('child_process')
        //         try {
        //             exec('/opt/node_modules/.bin/sequelize db:seed:all', (err, stdout, stderr) => {
        //                 if (err) {
        //                     console.log(err)
        //                     return
        //                 }
        //                 console.log(stdout)
        //             })
        //         } catch (error) {
        //             console.log('Error while seeding database: ', error)
        //         }
        //     } else {
        //         console.log('Database already seeded.')
        //     }
        // })
    } catch (err) {
        console.log('Unable to connect to the database:', err)
    }
}


