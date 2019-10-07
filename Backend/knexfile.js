// Update with your config settings.

module.exports = {
  client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'felipemysql',
      user:     'felipemysql',
      password: '12345'
    },
  pool: {
    min: 2,
    max: 10
  },
    migrations: {
      tableName: 'knex_migrations'
    }
};
