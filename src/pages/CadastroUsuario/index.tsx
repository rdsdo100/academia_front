import React from 'react';
import Input from '../../component/Input'
import {Container , ContainerInpus} from './styles'

const CadastroUsuario: React.FC = () => {
    return(
        
<Container>

            <Input placeholder= "nome" type='text'></Input>
            <Input placeholder= "sobrenome" type='text'></Input>
            <Input placeholder= "cpf" type='text'></Input>
            <Input placeholder= "dataNacimento" type='text'></Input>
            <Input placeholder= "logradouro" type='text'></Input>
            <Input placeholder= "complemento" type='text'></Input>
            <Input placeholder= "bairro" type='text'></Input>
            <Input placeholder= "localidade" type='text'></Input>
            <Input placeholder= "uf" type='text'></Input>
            <Input placeholder= "ibge" type='text'></Input>
            <Input placeholder= "numero" type='text'></Input>
            <Input placeholder= "logradouro" type='text'></Input>
            <Input placeholder= "dd" type='text'></Input>
            <Input placeholder= "telefone" type='text'></Input>
            <Input placeholder= "email" type='email'></Input>


</Container>

    )
}
export default CadastroUsuario