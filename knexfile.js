module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/nhl',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
