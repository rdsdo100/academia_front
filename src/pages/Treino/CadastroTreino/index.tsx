import React from 'react';
import {Component} from "./styles";
import LayoutPrincipal from "../../../component/Layout/LayoutPrincipal";
import LayoutCadastro from "../../../component/Layout/LayoutCadastro";
import {Tabelas} from "../../Usuario/CadastroUsuario/styles";
import Tabs from "../../../component/Tabs";


const CadastroTreino: React.FC = () => {
    return(

        <Component>
            <LayoutPrincipal>

                    <LayoutCadastro>
                        <Tabelas>
                            <Tabs></Tabs>
                        </Tabelas>
                    </LayoutCadastro>
            </LayoutPrincipal>
        </Component>

    )
}
export default CadastroTreino