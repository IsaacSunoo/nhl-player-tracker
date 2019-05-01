exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('teams', function(table) {
      table.increments('id').primary();
      table.string('team_name');
      table.string('location');
      table.string('home_rink');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('players', function(table) {
      table.increments('id').primary();
      table.integer('number');
      table.string('name');
      table.string('position');
      table.integer('age');
      table.integer('team_id').unsigned();
      table.foreign('team_id').references('teams.id');
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('teams'),
    knex.schema.dropTable('players')
  ]);
};
