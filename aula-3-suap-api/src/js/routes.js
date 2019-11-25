
import HomePage from '../pages/home.f7.html';
import RepositoriosPage from '../pages/repositorios.f7.html';
import TodosPage from '../pages/todos.f7.html';
import SuapPage from '../pages/suap.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/repositorios',
    component: RepositoriosPage,
  },
  {
    path: '/todos',
    component: TodosPage,
  },
  {
    path: '/suap',
    component: SuapPage
  }
];

export default routes;