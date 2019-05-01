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

// exports.seed = (knex, Promise) => {
//   return knex('footnotes')
//     .del() // delete footnotes first
//     .then(() => knex('papers').del()) // delete all papers
//     .then(() => {
//       let paperPromises = [];

//       papersData.forEach(paper => {
//         paperPromises.push(createPaper(knex, paper));
//       });

//       return Promise.all(paperPromises);
//     })
//     .catch(error => console.log(`Error seeding data: ${error}`));
// };
