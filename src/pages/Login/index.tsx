import React from 'react'
import './styles.css'



 const Login: React.FC = () => {

return(

<div className='tela'>
    <div className='login-box'>
        <h2>Login</h2>
        <form action="">
            <div className='user-box'>
                <input type='text' required/>
                <label>Usuário</label>
            </div>
            <div className='user-box'>
                <input type='password' required/>
                <label>Senha</label>
            </div>
            <a href="#">Entrar</a>

        </form>
    </div>
</div>
)
}
export default Login

//https://mariosouto.com/inputs-materializados-com-css/