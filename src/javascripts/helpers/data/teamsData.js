import axios from 'axios';

const getTeams = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/teams.json').then((response) => {
    const teamInfo = response.data.teams;
    const teams = [];
    Object.keys(teamInfo).forEach((teamId) => {
      teamInfo[teamId].id = teamId;
      teams.push(teamInfo[teamId]);
    });
    resolve(teams);
  }).catch((error) => reject(error));
});

export default { getTeams };
