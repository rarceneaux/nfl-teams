
import utils from '../../helpers/utils';

import teamData from '../../helpers/data/teamsData';

import teamCards from '../TeamCards/TeamCards';

const teamCardBuilder = () => {
  const teams = teamData.getTeams();
  let domString1 = '<div id="cards">';
  teams.forEach((team) => {
    // console.log(team);
    domString1 += teamCards.teamCard(team);
  });
  domString1 += '</div>';
  console.log(domString1);
  utils.printToDom('content', domString1);
};

export default { teamCardBuilder };
