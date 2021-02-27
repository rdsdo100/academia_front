import React, {ChangeEvent, FormEvent, MouseEventHandler, useState} from 'react';
import LayoutPrincipal from "../../../component/Layout/LayoutPrincipal";
import LayoutCadastro from "../../../component/Layout/LayoutCadastro";
import {Tabs, Tab} from '../../../component/TabsComponents'
import {Form} from './styles'
import {Div20, Div30, Div40, Div50, Div60, DivLinha} from "../../../component/TabsComponents/styles";
import InputCadastro from "../../../component/input/InputCadastro";
import Toggle from "../../../component/input/Toggle";
import InputDate from "../../../component/input/InputDate";
import Button from "../../../component/Buttons/Button";
import {api} from "../../../services/api";

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

interface IUsuario{
        nomeUsuario: string
        senha: string
        tipoUsuario?: number
        academia: number
}

interface IEmail{
    emails: string
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
    dataNacimento?: Date
}
interface ICadastroPessoa {
    usuario: IUsuario
    pessoa: IPessoa
    endereco: IEndereco
    telefone: ITelefone
    email: IEmail
}

const CadastroUsuario: React.FC = () => {


    const [cep, setCep] = useState<string>('')
    const [logradouro, setLogradouro] = useState<string>('')
    const [complemento, setComplemento] = useState<string>('')
    const [bairro, setBairro] = useState<string>('')
    const [localidade, setLocalidade] = useState<string>('')
    const [uf, setUf] = useState<string>('')
    const [ibge, setIbge] = useState<string>('')
    const [numero, setNumero] = useState<string>('')
    const [nomeUsuario, setNomeUsuario] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [tipoUsuario, setTipoUsuario] = useState<Number>(0)
    const [academia, setAcademia] = useState<number>(0)
    const [emails, setEmails] = useState<string>('')
    const [dd, setDd] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [sobrenome, setSobrenome] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [dataCadastro, setDatacadastro] = useState<Date>()
    const [dataNacimento, setDatanacimento] = useState<Date>()

    function handleCpf(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setCpf(String(value))
    }

    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setNome(String(value))
    }

    function handleSbreNome(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setSobrenome(String(value))
    }

    function handleEmail(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setEmails(String(value))
    }

    function handleDd(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setDd(String(value))
    }

    function handleTelefone(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setTelefone(String(value))
    }

    function handleTipoUsuario(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setTipoUsuario(Number(value))
    }

    function handleSenha(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setSenha(String(value))
    }

    function handleCep(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setCep(String(value))
    }

    function handleLogradouro(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setLogradouro(String(value))
    }

    function handleComplemento(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setComplemento(String(value))
    }

    function handleBairro(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setBairro(String(value))
    }

    function handleLocalidade(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setLocalidade(String(value))
    }

    function handleUF(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setUf(String(value))
    }

    function handleIbge(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setIbge(String(value))
    }

    function handleNumero(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setNumero(String(value))
    }

    function handleNomeUsuario(event: ChangeEvent<HTMLInputElement>) {
    const {value} = event.target
    setNomeUsuario(String(value))
}

    async function handleCadastrarButton(){

        let enviar: ICadastroPessoa

        const pessoa:IPessoa = {
            nome ,
            sobrenome,
            cpf,
            dataCadastro,
            dataNacimento
        }

        const endereco: IEndereco = {
            cep,
            logradouro,
            complemento,
            bairro,
            localidade,
            uf,
            ibge,
            numero,
        }

        const telefone: ITelefone = {
            dd,
               telefone : ''
        }

        const usuario: IUsuario = {
            nomeUsuario,
            senha,
            academia
        }

        const email: IEmail = {
            emails
        }

        enviar = {
            pessoa, endereco, usuario, telefone, email
        }

        api.post<IPessoa>('/test' , enviar , {headers:{
            ok: "ok"
            }}).then(x=>{
                console.log(x.status)
        })
        console.log(enviar)

    }

    return(
        <LayoutPrincipal>
            <LayoutCadastro>

                <Form>
                    <Tab>
                        <Tabs IdNameTab={'tab1'} text={"Pessoa"} defaultCheckedTab={true} >
                            <DivLinha>
                                <Div30>
                                    <InputCadastro name="CPF" onChange={handleCpf} >CPF</InputCadastro>
                                </Div30>
                                <Div20>
                                    <InputDate name="dataNacimento" >Data de Nacimento</InputDate>
                                </Div20>
                                <Div20>
                                    <InputDate name="dataCadastro">Data de Cadastro</InputDate>
                                </Div20>

                                <Toggle/>
                                <Toggle/>
                            </DivLinha>

                            <DivLinha>
                                <Div40>
                                    <InputCadastro name='nome'onChange={handleNome} >Nome</InputCadastro>
                                </Div40>
                                <Div60>
                                    <InputCadastro name='sobremome' onChange={handleSbreNome} >SobreNome</InputCadastro>
                                </Div60>
                            </DivLinha>

                            <DivLinha>
                                <Div60>
                                    <InputCadastro type='email' name='email' onChange={handleEmail} >email</InputCadastro>
                                </Div60>
                            </DivLinha>

                            <DivLinha>
                                <Div20>
                                    <InputCadastro type='text' name='dd' onChange={handleDd}>DD</InputCadastro>
                                </Div20>
                                <Div60>
                                    <InputCadastro type='text' name='telefone' onChange={handleTelefone}>telefone</InputCadastro>
                                </Div60>

                            </DivLinha>

                            <DivLinha>
                                <Div50>
                                    <InputCadastro name='nomeUsuário' onChange={handleNomeUsuario} >Nome de Usuário</InputCadastro>
                                </Div50>
                                <Div30>
                                    <InputCadastro name='nivelUsuario' onChange={handleTipoUsuario} >Nível Usuário</InputCadastro>
                                </Div30>
                            </DivLinha>

                            <DivLinha>
                                <Div60>
                                    <InputCadastro type='password' name='senha' onChange={handleSenha}>Senha</InputCadastro>
                                </Div60>
                            </DivLinha>


                        </Tabs>
                        <Tabs IdNameTab={'tab2'} text={"Endereço"} >
                            <DivLinha>
                                <Div40>
                                    <InputCadastro name='cep' onChange={handleCep} >Cep</InputCadastro>
                                </Div40>
                            </DivLinha>
                            <DivLinha>
                                <InputCadastro name='logradouro' onChange={handleLogradouro} >Logradouro</InputCadastro>
                                <InputCadastro name="complemento"onChange={handleComplemento}>Complemento</InputCadastro>
                            </DivLinha>
                            <DivLinha>
                                <InputCadastro name='bairro' onChange={handleBairro} >Bairro</InputCadastro>
                                <InputCadastro name="localidade" onChange={handleLocalidade} >Localidade</InputCadastro>
                                <InputCadastro name="UF" onChange={handleUF}>UF</InputCadastro>
                            </DivLinha>
                            <DivLinha>
                                <InputCadastro name='ibge' onChange={handleIbge} >Ibge</InputCadastro>
                                <InputCadastro name="numero" onChange={handleNumero}>Número</InputCadastro>
                            </DivLinha>


                        </Tabs>
                        <Tabs IdNameTab={'tab3'} text={"Permissões"} >

                        </Tabs>

                    </Tab>

                    <Button type='button' onClick={handleCadastrarButton}>Salvar</Button>
                    <Button>Cancelar</Button>
                </Form>

            </LayoutCadastro>
        </LayoutPrincipal>

    )
}
export default CadastroUsuario