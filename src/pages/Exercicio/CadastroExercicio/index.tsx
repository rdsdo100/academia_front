import React from 'react';
import {Component} from "./styles";
import LayoutPrincipal from "../../../component/layout/LayoutPrincipal";
import {TabBody, Tabs, Tab} from '../../../component/TabsComponets'
import LayoutCadastro from "../../../component/layout/LayoutCadastro";

const CadastroExercicio: React.FC = () => {
    return(
        <Component>
            <LayoutPrincipal>
                <LayoutCadastro>
                    <div>
                        <TabBody></TabBody>
                        <Tab></Tab>
                        <Tabs></Tabs>
                    </div>
                </LayoutCadastro>
            </LayoutPrincipal>
        </Component>
    )
}
export default CadastroExercicio