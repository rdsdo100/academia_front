import React from "react";
import {Route , BrowserRouter  ,Switch, Redirect} from 'react-router-dom'
import Home from '../pages/Home';
import CadastroUsuario from "../pages/Usuario/CadastroUsuario";
import CadastroDieta from "../pages/Dieta/CadastroDieta";
import CadastroExercicio from "../pages/Exercicio/CadastroExercicio";
import CadastroTreino from "../pages/Treino/CadastroTreino";
import Academia from "../pages/Academia";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import ToVivo from "../pages/ToVivo";



const  PrivateRoute =  ({component, isAuthenticated, ...rest}: any) => {

    const routeComponent = (props: any) => (
      true
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/'}}/>
    );

    return <Route {...rest} render={routeComponent}/>;
};

const Routes =  () =>{
  return(
  <BrowserRouter>
    <Switch> // não deixa mais de uma rota ser chamada ao mesmo tempo

      <Route component={ToVivo} path='/' exact ></Route>
      <Route component={Login} path='/login' exact ></Route>
      <PrivateRoute component={Home} path='/home' ></PrivateRoute>
      <PrivateRoute component={CadastroUsuario} path='/cadastro-usuario'></PrivateRoute>
      <PrivateRoute component={CadastroDieta} path='/cadastro-dieta'></PrivateRoute>
      <PrivateRoute component={CadastroExercicio} path='/cadastro-exercicio'></PrivateRoute>
      <PrivateRoute component={CadastroTreino} path='/cadastro-treino'></PrivateRoute>
      <PrivateRoute component={Academia} path='/cadastro-academia'></PrivateRoute>
      <Route component={ErrorPage} path='*'></Route>
    

    </Switch>
  </BrowserRouter>
  )
}

  export default Routes