import React from 'react';


import Input from "../../../component/Input";
import Menu from "../../../component/Menu";
import Layout from "../../../component/Layout";

const CadastroUsuario: React.FC = () => {
    return(
        
<Layout>
    <Menu/>
    <div>
        <div>
            <Input type='text'> <label>Nome</label></Input>
            <Input type='text'><label>Sobrenome</label></Input>
        </div>
        <div>
            <Input type='text'><label>cpf</label></Input>
            <Input type='text'><label>dataNacimento</label></Input>
            <Input type='text'><label>logradouro</label></Input>
            <Input type='text'><label>complemento</label></Input>
            <Input type='text'><label>bairro</label></Input>
            <Input type='text'><label>localidade</label></Input>
            <Input type='text'><label>UF</label></Input>
            <Input type='text'><label>ibge</label></Input>
            <Input type='text'><label>numero</label></Input>
            <Input type='text'><label>logradouro</label></Input>
        </div>
        <div>
            <Input type='text'><label>DD</label></Input>
            <Input type='text'><label>telefone</label></Input>
        </div>
    <div>
            <Input type='email'><label>email</label></Input>
    </div>

    </div>
</Layout>

    )
}
export default CadastroUsuario