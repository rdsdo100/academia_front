import React from 'react';
import {Component} from "./styles";
import LayoutPrincipal from "../../../component/layout/LayoutPrincipal";
import {Tabs, Tab} from '../../../component/TabsComponents'
import LayoutCadastro from "../../../component/layout/LayoutCadastro";
import { Div20, Div30, Div40, Div50, Div60, DivLinha} from "../../../component/TabsComponents/styles";
import InputCadastro from "../../../component/input/InputCadastro";
import Toggle from "../../../component/input/Toggle";

const CadastroExercicio: React.FC = () => {
    return(
        <Component>
            <LayoutPrincipal>
                <LayoutCadastro>
                    <div>
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
                    </div>
                </LayoutCadastro>
            </LayoutPrincipal>
        </Component>
    )
}
export default CadastroExercicio