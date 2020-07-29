import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria';


const Pagina404 = () => (<div>Página 404</div>)
//responsavel por iniciar react, toda aplicação "container" root.
//SPA - Single Page Aplication, nao recarregar pagina, apenas mostre x component
//"Padrao" BrowserRouter-Switch-Route, exact indica que somente route correto sera aceito
//por padrão switch sem exatc, leva para default, home.
//Senao existe "path="" ele sera encarado como novo default switch
//Forma rapida testar componente diretamente <Route component={() => (<div>Página 404</div>)}/>
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')//mesmo do index.html
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
