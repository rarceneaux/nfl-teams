import 'bootstrap';
import '../styles/main.scss';
import teamsList from './components/TeamList/TeamList';

const init = () => {
  teamsList.buildTeams();
};
init();
