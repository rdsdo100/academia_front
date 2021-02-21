import React from 'react';

import {NavTabs, UL , LI , LabelTabs , RdTabs , Content} from './styles'
import InputCAdastro from "../input/InputCadastro";

const Tabs: React.FC = () => {

    return(
        <div>
            <NavTabs className='nav_tabs'>
                <UL>
                    <LI>
                        <RdTabs type='radio' name='tabs' id='tab1' />
                        <LabelTabs  htmlFor="tab1">Usuário</LabelTabs>
                        <Content>
<InputCAdastro>Nome</InputCAdastro>
                            <InputCAdastro>SobreNome</InputCAdastro>
                        </Content>
                    </LI>
                    <LI>
                        <RdTabs type='radio' name='tabs' id='tab2' />
                        <LabelTabs  htmlFor="tab2">Endereco</LabelTabs>
                        <Content >

                        </Content>
                    </LI>
                    <LI>
                        <RdTabs type='radio' name='tabs' id='tab3' />
                        <LabelTabs  htmlFor="tab3">Telefone</LabelTabs>
                        <Content className="content">

                        </Content>
                    </LI>
                    <LI>
                        <RdTabs type='radio' name='tabs' id='tab4' />
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