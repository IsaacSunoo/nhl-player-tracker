const teamsData = require('../../teamsData');
const createTeam = (knex, teams) => {
  return knex('teams')
    .insert(
      {
        teamName: teams.team_name,
        location: teams.location,
        homeRink: teams.home_rink
      },
      'id'
    )
};

