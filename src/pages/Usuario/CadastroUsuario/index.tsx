import React from 'react';


import Input from "../../../component/Input";

const CadastroUsuario: React.FC = () => {
    return(
        
<div>

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


        <button type='submit'>Cadastrar</button>


</div>

    )
}
export default CadastroUsuario