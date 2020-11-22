const {exec} = require('child_process')
try {
    console.log('Database is not seeded, will run seeds now...')
    exec('sequelize db:seed:all', (err, stdout, stderr) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(stdout)
    })
} catch (error) {
    console.log('Error while seeding database: ', error)
}
console.log('finish DB seed')