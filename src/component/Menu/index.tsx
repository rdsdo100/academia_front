import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import {ImMenu} from "react-icons/im";
import {AiOutlineUser} from "react-icons/all";

const Menu: React.FC = () => {
    return(
        <div>
            <input type='checkbox' id='check' ></input>
            <label htmlFor="check">
<span><ImMenu className='icon' /></span>
            </label>
            <nav>
                <ul>
                    <li><Link to="/Inicio">Home</Link></li>
                    <li><Link to="/cadastro-usuario"><AiOutlineUser className='icon2'/>Usuário</Link></li>
                    <li><Link to='/cadastro-dieta'>CadastroDieta</Link></li>
                    <li><Link to='/cadastro-exercicio'>CadastroExercicio</Link></li>
                    <li><Link to='/cadastro-treino'>CadastroTreino</Link></li>
                    <li><Link to='/cadastro-academia'>Academia</Link></li>
                </ul>
            </nav>
        </div>

    )
}

export default Menu