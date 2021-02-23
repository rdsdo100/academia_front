import React from 'react';
import LayoutPrincipal from "../../../component/layout/LayoutPrincipal";
import LayoutCadastro from "../../../component/layout/LayoutCadastro";
import Tabs from "../../../component/Tabs";
import {Tabelas} from './styles'



interface IEndereco{

    /*enderecos.cep
    enderecos.logradouro
    enderecos.complemento ;
    enderecos.bairro
    enderecos.localidade = String(request.body.endereco.localidade);
    enderecos.uf = String(request.body.endereco.uf);
    enderecos.ibge = String(request.body.endereco.ibge);
    enderecos.numero = String(request.body.endereco.numero);
    */
}
interface Iusuario{

}
interface IEmail{

}
interface ITelefone{

}
interface IPessoa{

}


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