import React from "react";
import {Route , BrowserRouter  ,Switch, Redirect} from 'react-router-dom'
import Home from '../pages/Home';
import CadastroUsuario from "../pages/Usuario/CadastroUsuario";
import CadastroDieta from "../pages/Dieta/CadastroDieta";
import CadastroExercicio from "../pages/Exercicio/CadastroExercicio";
import CadastroTreino from "../pages/Treino/CadastroTreino";

/*

const  PrivateRoute =  ({component, isAuthenticated, ...rest}: any) => {

    const routeComponent = (props: any) => (
      loginServer.islogin()
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/'}}/>
    );

    return <Route {...rest} render={routeComponent}/>;
};
*/
const Routes =  () =>{
  return(
  <BrowserRouter>
    <Switch> // não deixa mais de uma rota ser chamada ao mesmo tempo

      <Route path='/' exact ><h1>Possivel login!</h1></Route>
      <Route component={Home} path='/home' ></Route>
      <Route component={CadastroUsuario} path='/cadastro-usuario'></Route>
      <Route component={CadastroDieta} path='/cadastro-dieta'></Route>
      <Route component={CadastroExercicio} path='/cadastro-exercicio'></Route>
      <Route component={CadastroTreino} path='/cadastro-treino'></Route>
    

    </Switch>
  </BrowserRouter>
  )
}

  export default Routes