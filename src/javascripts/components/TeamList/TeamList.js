import teamsData from '../../helpers/data/teamsData';

const buildTeams = () => {
  teamsData.getTeams()
    .then((teams) => {
      console.log('team array from teamList', teams);
    })
    .catch((error) => {
      console.error('it broke', error);
    });
};

export default { buildTeams };
