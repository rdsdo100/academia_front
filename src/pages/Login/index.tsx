import React, {ChangeEvent, useState} from 'react'
import {Link , useHistory} from 'react-router-dom'
import './styles.css'
import LoginServer from "../../services/LoginServer";



 const Login: React.FC = () => {

     const history = useHistory()
    const [usuario , setUsuario] = useState<string>()
     const [senha , setSenha] = useState<string>()
     const [error , setError] = useState<string>()

     function habdleInputUsuario(event : ChangeEvent<HTMLInputElement>) {
         const {name , value} = event.target
setUsuario(String(value))
     }
     function habdleInputSenha(event : ChangeEvent<HTMLInputElement>) {
         const {name , value} = event.target
         setSenha(String(value))
     }

     async function handleEntrar() {
         //event.preventDefault()
         const loginServer= new LoginServer()
        const login = await loginServer.login(String(usuario) , String(senha))
         console.log(login.data)
         if(login.data.authorization){
             history.push('/home')
         }else{
             setError("Login Invalido!")
         }


     }


return(
<div className='tela'>
    <div className='login-box'>
        <h2>Login</h2>
        <form action="">
            <div className='user-box'>
                <input type='text' required
                       name="usuario"
                       onChange={habdleInputUsuario}

                />
                <label>Usuário</label>
            </div>
            <div className='user-box'>
                <input type='password' required
                       name="senha"
                       onChange={habdleInputSenha}
                />
                <label>Senha</label>
            </div>
            <span>{error}</span>
            <a type='submit'
           onClick={()=>{handleEntrar()}}
            >Entrar</a>
        </form>
    </div>
</div>
)
}
export default Login

//https://mariosouto.com/inputs-materializados-com-css/