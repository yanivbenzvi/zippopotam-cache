const {exec} = require('child_process')
try {
    exec('sequelize db:migrate', (err, stdout, stderr) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(stdout)
    })
} catch (error) {
    console.log('Error while seeding database: ', error)
}
console.log('finish DB migration')



