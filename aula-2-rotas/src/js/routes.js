
// import NomeVariável from Caminho_DaPasta

import HomePage from '../pages/home.f7.html';
import RepositoriosPage from '../pages/repositorios.f7.html';
import TodosPage from '../pages/todos.f7.html';
import SuapPage from '../pages/suap.f7.html';


var routes = [
  // Por padrão, ao compilar,a aplicação abre primeiro a página quem seja definida como a raiz do projeto "/"
  {
    path: '/',
    component: HomePage
  },
  // Abrir uma rota que contenha o nome de como ele deve ser chamado (path)s e tenha o componente importado anteriormente
  {
    path:'/repositorios',
    component: RepositoriosPage
  },
  {
    path:'/todos',
    component:TodosPage
  },
  {
    path:'/suap',
    component:SuapPage
  }
];

export default routes;