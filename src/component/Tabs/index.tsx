import React, {MouseEventHandler} from 'react';

import {NavTabs, UL , LI , LabelTabs , RdTabs ,
    Content , DivColunaNome, DivLinha , DivColunaSobrenomeNome,
    DivColunaCpf , DivColunaDataNacimento,DivColunaSenha, DivColunaTipoUsuario, DivColunaUsuario,
    DivDD, DivTelefone
} from './styles'
import InputCadastro from "../input/InputCadastro";

const Tabs: React.FC = () => {

        return(
        <div>
            <NavTabs className='nav_tabs'>
                <UL>
                    <LI>
                        <RdTabs type='radio' name='tabs' id='tab1' defaultChecked={true} />
                        <LabelTabs  htmlFor="tab1">Usuário</LabelTabs>
                        <Content>
                            <DivLinha>
                                <DivColunaCpf>
                                    <InputCadastro>CPF</InputCadastro>
                                </DivColunaCpf>
                                <DivColunaDataNacimento>
                                    <InputCadastro>Data de Nacimento</InputCadastro>
                                </DivColunaDataNacimento>
                            </DivLinha>

                            <DivLinha>
                                <DivColunaNome>
                                    <InputCadastro>Nome</InputCadastro>
                                </DivColunaNome>
                                <DivColunaSobrenomeNome>
                                    <InputCadastro>SobreNome</InputCadastro>
                                </DivColunaSobrenomeNome>
                            </DivLinha>

                            <DivLinha>
                                <DivColunaUsuario>
                                <InputCadastro>Nome de Usuário</InputCadastro>
                                </DivColunaUsuario>
                                <DivColunaTipoUsuario>
                                <InputCadastro>Nível Usuário</InputCadastro>
                                </DivColunaTipoUsuario>
                            </DivLinha>

                            <DivLinha>
                                <DivColunaSenha>
                                    <InputCadastro>Senha</InputCadastro>
                                </DivColunaSenha>
                            </DivLinha>

                        </Content>
                    </LI>
                    <LI>
                        <RdTabs type='radio' name='tabs' id='tab2' defaultChecked={false} />
                        <LabelTabs  htmlFor="tab2">Endereco</LabelTabs>
                        <Content >
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
                        <LabelTabs  htmlFor="tab3">Telefone</LabelTabs>
                        <Content className="content">
                            <DivLinha>
                                <DivDD>
                                    <InputCadastro type='text'>DD</InputCadastro>
                                </DivDD>
                                <DivTelefone>
                                    <InputCadastro type='text'>telefone</InputCadastro>
                                </DivTelefone>

                            </DivLinha>
                        </Content>
                    </LI>
                    <LI>
                        <RdTabs type='radio' name='tabs' id='tab4' defaultChecked={false} />
                        <LabelTabs  htmlFor="tab4">Email</LabelTabs>
                        <Content className="content">
                        <DivLinha>
                            <InputCadastro type='email'>email</InputCadastro>
                        </DivLinha>
                        </Content>
                    </LI>
                </UL>
            </NavTabs>
        </div>
    )
}
export default Tabs