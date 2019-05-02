const playersData = require('../../playersData');
const createPlayers = (knex, player) => {
  return knex('players').insert(
    {
      number: player.number,
      name: player.name,
      position: player.position,
      age: player.age,
      teamId: player.teamId
    },
    'id'
  )
    .then(playerId => {
    console.log(playerId)
  })
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
