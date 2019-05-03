const playersData = require('../../playersData');
const createPlayers = (knex, player) => {
  console.log('knex: ', knex, 'player: ', player);
  return knex('players').insert(
    {
      number: player.number,
      name: player.name,
      position: player.position,
      age: player.age,
      team_id: player.team_id
    },
    'id'
  )
};

exports.seed = (knex, Promise) => {
  return knex('players')
    .del()
    .then(() => {
      let playersPromises = [];

      playersData.forEach(player => {
        playersPromises.push(createPlayers(knex, player));
      });

      return Promise.all(playersPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
