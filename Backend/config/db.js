const config = require('../knexfile')
const knex = require('knex')(config)

// knex.migrate.latest([config])  // CUIDADO! Apague isto na producao
module.exports = knex
