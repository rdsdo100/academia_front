import React from 'react';
import LayoutPrincipal from "../../../component/layout/LayoutPrincipal";
import LayoutCadastro from "../../../component/layout/LayoutCadastro";
import {Tabs, Tab} from '../../../component/TabsComponents'
import {Tabelas} from './styles'
import {Div20, Div30, Div40, Div50, Div60, DivLinha} from "../../../component/TabsComponents/styles";
import InputCadastro from "../../../component/input/InputCadastro";
import Toggle from "../../../component/input/Toggle";

interface IEndereco{
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    ibge: string
    numero: string

}
interface Iusuario{

}
interface IEmail{

}
interface ITelefone{

}
interface IPessoa{

}


/*
*  pessoas.nome = String(request.body.pessoa.nome);
        pessoas.sobrenome = String(request.body.pessoa.sobrenome);
        pessoas.cpf = String(request.body.pessoa.cpf);
        pessoas.dataCadastro = new Date();
        pessoas.dataNacimento = new Date();

        enderecos.cep = String(request.body.endereco.cep);
        enderecos.logradouro = String(request.body.endereco.logradouro);
        enderecos.complemento = String(request.body.endereco.complemento);
        enderecos.bairro = String(request.body.endereco.bairro);
        enderecos.localidade = String(request.body.endereco.localidade);
        enderecos.uf = String(request.body.endereco.uf);
        enderecos.ibge = String(request.body.endereco.ibge);
        enderecos.numero = String(request.body.endereco.numero);

         telefones.dd = String(request.body.telefone.dd);
        telefones.telefone = String(request.body.telefone.telefone);

        emails.email = String(request.body.email.email);

        tiposUsuarios.id = Number(request.body.usuario.tipoUsuario);

       academias.id = Number(request.body.usuario.academia);

        usuarios.nomeUsuario = String(request.body.usuario.nomeUsuario);
        usuarios.email = String(request.body.email.email);
        usuarios.senha = String(request.body.usuario.senha);
        usuarios.ativo = true;
        usuarios.tiposUsuariosIdFK = tiposUsuarios;
        usuarios.academiasIdFK = academias;
*
* */


const CadastroUsuario: React.FC = () => {



    return(
        
<LayoutPrincipal>
    <LayoutCadastro>
        <Tabelas>
            <Tab>
                <Tabs IdNameTab={'tab1'} text={"Pessoa"} defaultCheckedTab={true} >
                    <DivLinha>
                        <Div30>
                            <InputCadastro>CPF</InputCadastro>
                        </Div30>
                        <Div30>
                            <InputCadastro type='date'>Data de Nacimento</InputCadastro>
                        </Div30>

                        <Toggle/>
                        <Toggle/>
                    </DivLinha>

                    <DivLinha>
                        <Div40>
                            <InputCadastro>Nome</InputCadastro>
                        </Div40>
                        <Div60>
                            <InputCadastro>SobreNome</InputCadastro>
                        </Div60>
                    </DivLinha>

                    <DivLinha>
                        <Div60>
                            <InputCadastro type='email'>email</InputCadastro>
                        </Div60>
                    </DivLinha>

                    <DivLinha>
                        <Div20>
                            <InputCadastro type='text'>DD</InputCadastro>
                        </Div20>
                        <Div60>
                            <InputCadastro type='text'>telefone</InputCadastro>
                        </Div60>

                    </DivLinha>

                    <DivLinha>
                        <Div50>
                            <InputCadastro>Nome de Usuário</InputCadastro>
                        </Div50>
                        <Div30>
                            <InputCadastro>Nível Usuário</InputCadastro>
                        </Div30>
                    </DivLinha>

                    <DivLinha>
                        <Div60>
                            <InputCadastro type='password'>Senha</InputCadastro>
                        </Div60>
                    </DivLinha>


                </Tabs>
                <Tabs IdNameTab={'tab2'} text={"Endereço"} >
                    <DivLinha>
                        <Div40>
                            <InputCadastro>Cep</InputCadastro>
                        </Div40>
                    </DivLinha>
                    <DivLinha>
                        <InputCadastro>logradouro</InputCadastro>
                        <InputCadastro>complemento</InputCadastro>
                    </DivLinha>
                    <DivLinha>
                        <InputCadastro>bairro</InputCadastro>
                        <InputCadastro>localidade</InputCadastro>
                        <InputCadastro>UF</InputCadastro>
                    </DivLinha>
                    <DivLinha>
                        <InputCadastro>ibge</InputCadastro>
                        <InputCadastro>numero</InputCadastro>
                        <InputCadastro>logradouro</InputCadastro>
                    </DivLinha>


                </Tabs>
                <Tabs IdNameTab={'tab3'} text={"Permissões"} >


                </Tabs>


            </Tab>
        </Tabelas>
    </LayoutCadastro>
</LayoutPrincipal>

    )
}
export default CadastroUsuario