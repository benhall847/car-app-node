const pgp = require('pg-promise')({
    query: e =>{
        
    }
})

const options = {
    host:'localhost',
    database: 'tv-show-app'
}

const db = pgp(options);
module.exports = db;