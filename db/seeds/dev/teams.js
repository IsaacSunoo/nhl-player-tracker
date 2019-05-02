const teamsData = require('../../teamsData');
const createTeam = (knex, team) => {
  return knex('teams')
    .insert(
      {
        teamName: team.team_name,
        location: team.location,
        homeRink: team.home_rink
      },
      'id'
    )
};

exports.seed = (knex, Promise) => {
  return knex('teams')
    .del()
    .then(() => {
      let teamsPromises = [];

      teamsData.forEach(team => {
        teamsPromises.push(createTeam(knex, team));
      });

      return Promise.all(teamsPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};

