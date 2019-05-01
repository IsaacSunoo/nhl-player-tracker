const teamsData = require('../../teamsData');
const createTeam = (knex, team) => {
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

