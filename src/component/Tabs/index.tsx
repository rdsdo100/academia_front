import React from 'react';

import {NavTabs, UL , LI , LabelTabs , RdTabs ,
    Content ,  DivLinha , Div20, Div30, Div40, Div50, Div60, Div100
} from './styles'
import InputCadastro from "../input/InputCadastro";

const Tabs: React.FC = () => {

    return(
        <div>
            <NavTabs>
                <UL>
                    <LI>
                        <RdTabs type='radio' name='tabs' id='tab1' defaultChecked={true} />
                        <LabelTabs  htmlFor="tab1">Usuário</LabelTabs>
                        <Content>
                            <DivLinha>
                                <Div30>
                                    <InputCadastro>CPF</InputCadastro>
                                </Div30>
                                <Div30>
                                    <InputCadastro type='date'>Data de Nacimento</InputCadastro>
                                </Div30>
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

                        </Content>
                    </LI>
                    <LI>
                        <RdTabs type='radio' name='tabs' id='tab2' defaultChecked={false} />
                        <LabelTabs  htmlFor="tab2">Endereco</LabelTabs>
                        <Content >
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

                        </Content>
                    </LI>
                    <LI>
                        <RdTabs type='radio' name='tabs' id='tab3' defaultChecked={false}/>
                        <LabelTabs  htmlFor="tab3">Permissoes</LabelTabs>
                        <Content className="content">

                        </Content>
                    </LI>
                    <LI>
                        <RdTabs type='radio' name='tabs' id='tab4' defaultChecked={false} />
                        <LabelTabs  htmlFor="tab4">Email</LabelTabs>
                        <Content className="content">

                        </Content>
                    </LI>
                </UL>

            </NavTabs>
        </div>
    )
}
export default Tabs