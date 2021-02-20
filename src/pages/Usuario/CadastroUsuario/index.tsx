import React from 'react';
import LayoutPrincipal from "../../../component/layout/LayoutPrincipal";
import LayoutCadastro from "../../../component/layout/LayoutCadastro";
import Tabs from "../../../component/Tabs";
import {Tabelas} from './styles'

const CadastroUsuario: React.FC = () => {
    return(
        
<LayoutPrincipal>
    <LayoutCadastro>
        <Tabelas>
            <Tabs></Tabs>
        </Tabelas>
    </LayoutCadastro>
</LayoutPrincipal>

    )
}
export default CadastroUsuario