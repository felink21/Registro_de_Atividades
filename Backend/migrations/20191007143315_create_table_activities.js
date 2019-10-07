
exports.up = function(knex, Promise) {
    return knex.schema.createTable('activities', table => {
        table.increments('id').primary().notNullable()
        table.string('name').notNullable()
        table.string('description', 1000).notNullable()
        table.enum('status', ['pendente','fazendo','concluído']).notNullable()
        table.integer('userId').unsigned().references('id').inTable('users').notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('activities')
};
