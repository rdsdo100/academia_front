import React from 'react';
import LayoutPrincipal from "../../../component/Layout/LayoutPrincipal";
import LayoutCadastro from "../../../component/Layout/LayoutCadastro";
import {Tabs, Tab} from '../../../component/TabsComponents'
import {Form} from './styles'
import {Div20, Div30, Div40, Div50, Div60, DivLinha} from "../../../component/TabsComponents/styles";
import InputCadastro from "../../../component/input/InputCadastro";
import Toggle from "../../../component/input/Toggle";
import InputDate from "../../../component/input/InputDate";
import Button from "../../../component/Buttons/Button";

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
        nomeUsuario: string
        senha: string
        tipoUsuario: number
        academia: number
}

interface IEmail{
    email: string
}

interface ITelefone{
    dd: string
    telefone: string
}

interface IPessoa{
    nome: string
    sobrenome: string
    cpf: string
    dataCadastro?: Date
    dataNacimento: Date
}

const CadastroUsuario: React.FC = () => {
	
	
	const [var, var State] = useState()
const [cep, setCep] = useState()
const [logradouro, setLogradouro] = useState()
const [complemento, setComplemento] = useState()
const [bairro, setBairro] = useState()
const [localidade, setLocalidade] = useState()
const [uf, setUf] = useState()
const [ibge, setIbge] = useState()
const [numero, setNumero] = useState()
const [nomeUsuario, setNomeusuario] = useState()
const [senha, setSenha] = useState()
const [tipoUsuario, setTipousuario] = useState()
const [academia, setAcademia] = useState()
const [email, setEmail] = useState()
const [dd, setDd] = useState()
const [telefone, setTelefone] = useState()
const [nome, setNome] = useState()
const [sobrenome, setSobrenome] = useState()
const [cpf, setCpf] = useState()
const [dataCadastro, setDatacadastro] = useState()
const [dataNacimento, setDatanacimento] = useState()

	
	

    return(
        <LayoutPrincipal>
            <LayoutCadastro>

                <Form>
                    <Tab>
                        <Tabs IdNameTab={'tab1'} text={"Pessoa"} defaultCheckedTab={true} >
                            <DivLinha>
                                <Div30>
                                    <InputCadastro >CPF</InputCadastro>
                                </Div30>
                                <Div20>
                                    <InputDate>Data de Nacimento</InputDate>
                                </Div20>
                                <Div20>
                                    <InputDate>Data de Cadastro</InputDate>
                                </Div20>

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

                            <Button>Salvar</Button>

                        </Tabs>



                    </Tab>


                    <Button>Salvar</Button>
                </Form>



            </LayoutCadastro>
        </LayoutPrincipal>

    )
}
export default CadastroUsuario