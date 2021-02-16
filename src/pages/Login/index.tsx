import React, {ChangeEvent, useState} from 'react'
import {useHistory} from 'react-router-dom'
import './styles.css'
import LoginServer from "../../services/LoginServer";
import {useDispatch} from "react-redux";
import {loadAuthSuccess} from "../../store/ducks/auth/actions";

const Login: React.FC = () => {

    const dispath = useDispatch()
    const history = useHistory()
    const [usuario , setUsuario] = useState<string>()
    const [senha , setSenha] = useState<string>()
    const [error , setError] = useState<string>()

    function habdleInputUsuario(event : ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setUsuario(String(value))
    }
    function habdleInputSenha(event : ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setSenha(String(value))
    }

    async function handleEntrar() {
        //event.preventDefault()
        const loginServer= new LoginServer()
        const login = await loginServer.login(String(usuario) , String(senha))


        dispath(loadAuthSuccess({name: String(login.data.authorization.authorization)}))

console.log(login.data.authorization)


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