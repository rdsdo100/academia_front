import React from 'react';
import LayoutPrincipal from "../../../component/Layout/LayoutPrincipal";
import LayoutCadastro from "../../../component/Layout/LayoutCadastro";

interface IMedidas{
    idAluno: number
    dataAvaliacao: Date
    peso: number
    estatura: number
    toraxNormal: number
    toraxExpandido: number
    bracoDireitoRelaxado: number
    bracoDireitoExpandido: number
    bracoEsquerdoRelaxado: number
    bracoEsquerdoExpandido: number
    cintura: number
    abdomem: number
    quadril: number
    coxaMedialDireira: number
    coxaMedialEsquerda: number
    panturriliaDireita: number
    panturriliaEsquerda: number
    observacoes: string

}


const CadastroMedidas: React.FC = () => {
    return(
        <LayoutPrincipal>
            <LayoutCadastro>
            </LayoutCadastro>
        </LayoutPrincipal>
    )
}
export default CadastroMedidas