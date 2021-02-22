import React from 'react'
import {Nav , A , Label, UL, ImMenuIcons, InputCheck , Span} from './styles'

const Menu: React.FC = () => {
    return(

        <div>
            <InputCheck type='checkbox' id='check' ></InputCheck>
            <Label htmlFor="check">
                <Span>
                    <ImMenuIcons/>
                </Span>
            </Label>

            <Nav>

                <UL>
                    <li><A to="/home">Home</A></li>
                    <li><A to="/cadastro-usuario">Usuário</A></li>
                    <li><A to='/cadastro-dieta'>CadastroDieta</A></li>
                    <li><A to='/cadastro-exercicio'>CadastroExercicio</A></li>
                    <li><A to='/cadastro-treino'>CadastroTreino</A></li>
                    <li><A to='/cadastro-academia'>Academia</A></li>
                    <li><A to='/'>Sair</A></li>
                </UL>

            </Nav>

        </div>

    )
}

export default Menu