const {exec} = require('child_process')

process.on('beforeExit', (code) => {
    console.log(`About to exit with code ${code}`);
    try {
        exec('sequelize db:migrate:undo', (err, stdout, stderr) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(stdout)
        })
    } catch (error) {
        console.log('Error while drop database: ', error)
    }
})

process.on('SIGINT', (code) => {
    console.log(`About to exit with code ${code}`);
    try {
        exec('sequelize db:migrate:undo', (err, stdout, stderr) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(stdout)
        })
    } catch (error) {
        console.log('Error while drop database: ', error)
    }
})

